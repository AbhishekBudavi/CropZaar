/**
 * HeroSlider
 *
 * Auto-advancing carousel sitting above the login card.
 *
 * Responsibilities:
 *   ✅  Holds the slides data (or accepts it as a prop)
 *   ✅  Auto-advances every 3 s
 *   ✅  Syncs activeIndex with PaginationDots
 *   ✅  Supports swipe-to-navigate via FlatList
 *   ❌  Does NOT know anything about login — pure presentation
 *
 * Architecture note:
 *   Slides are passed in as data so the component is reusable across
 *   any onboarding / marketing flow.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    View,
    type NativeScrollEvent,
    type NativeSyntheticEvent,
} from "react-native";
import type { SlideData } from "..";
import HeroSlide from "./HeroSlide";
import { PaginationDots } from "./PaginationDots";

// ─── Slide Data ───────────────────────────────────────────────────────────
// Images live in assets/images/auth/ — replace the require() paths to match
// your actual file names.  Keep images ≤ 400px tall for performance.
const SLIDES: SlideData[] = [
  {
    id: "slide-1",
    image: require("../../../../assets/images/slide_1.png"),
    title: "Kisano ko",
    subtitle: "Saath Jode",
    accentText: "Aadhik Vikas ki Aur Badhe!",
  },
  {
    id: "slide-2",
    image: require("../../../../assets/images/slide_2.png"),
    title: "Beej se Bazar",
    subtitle: "tak sevaye",
    accentText: "paradan kare aur paise kamaye!",
  },
  {
    id: "slide-3",
    image: require("../../../../assets/images/Slide_3.png"),
    title: "Free",
    subtitle: "Marketing kare,",
    accentText: "Naye Grahak se jude",
  },
];

const AUTO_PLAY_INTERVAL = 3000; // ms

// ─── Component ───────────────────────────────────────────────────────────
interface HeroSliderProps {
  /** Override slides (useful for A/B testing or server-driven content) */
  slides?: SlideData[];
}

export function HeroSlider({ slides = SLIDES }: HeroSliderProps) {
  const { width: screenWidth } = Dimensions.get("window");
  const listRef = useRef<FlatList<SlideData>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Auto-advance ────────────────────────────────────────────────────────
  const goToNext = useCallback(() => {
    const next = (activeIndex + 1) % slides.length;
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setActiveIndex(next);
  }, [activeIndex, slides.length]);

  useEffect(() => {
    timerRef.current = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext]);

  // ── Sync active dot on manual swipe ─────────────────────────────────────
  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
        // Reset timer so manual swipe doesn't cause an immediate jump
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(goToNext, AUTO_PLAY_INTERVAL);
      }
    },
    [activeIndex, screenWidth, goToNext],
  );

  return (
    <View className="bg-slider-bg">
      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HeroSlide slide={item} width={screenWidth} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        bounces={false}
        // Avoid measuring issues on first render
        getItemLayout={(_, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
      />

      <PaginationDots count={slides.length} activeIndex={activeIndex} />
    </View>
  );
}
