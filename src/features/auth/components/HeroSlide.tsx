/**
 * HeroSlide
 *
 * A single slide inside the HeroSlider.
 * Renders:
 *   - Illustration image (top, centred)
 *   - Heading with two coloured lines (green + orange)
 *   - Sub-text
 *
 * It is deliberately presentational — no state, no side effects.
 * HeroSlider owns the list; this component just paints one item.
 *
 * Why separate from HeroSlider?
 *   HeroSlider could switch to a FlatList, ScrollView, or Reanimated
 *   carousel without touching this component at all.
 */

import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { Colors, textStyles, spacing } from "@/constants";
import type { SlideData } from "..";

interface HeroSlideProps {
  slide: SlideData;
  /** Passed in so the slide fills the full slider width on any device */
  width: number;
}

const IMAGE_HEIGHT = Dimensions.get("window").height * 0.22;

export default function HeroSlide({ slide, width }: HeroSlideProps) {
  return (
    <View style={{ width, paddingHorizontal: spacing.lg, paddingTop: spacing.lg, alignItems: "flex-start" }}>
      {/* Illustration */}
      <Image
        source={slide.image}
        style={{
          width: "100%",
          height: IMAGE_HEIGHT,
          alignSelf: "center",
          marginBottom: spacing.lg,
        }}
        resizeMode="contain"
        accessibilityLabel={slide.title}
      />

      {/* Heading block */}
      <View style={{ gap: spacing.xs }}>
        <Text style={[textStyles.heading2, { color: Colors.primary }]}>
          {slide.title}
        </Text>
        <Text style={[textStyles.heading2, { color: Colors.accent }]}>
          {slide.subtitle}
        </Text>
        <Text style={[textStyles.bodyLarge, { marginTop: spacing.xs, color: Colors.text.body }]}>
          {slide.accentText}
        </Text>
      </View>
    </View>
  );
}
