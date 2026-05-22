/**
 * PaginationDots
 *
 * Renders the 3 indicator dots below the hero slider.
 * Active dot = orange, inactive = grey.
 *
 * Props:
 *   count       – total number of slides
 *   activeIndex – currently visible slide (0-based)
 */

import React from "react";
import { View } from "react-native";

interface PaginationDotsProps {
  count: number;
  activeIndex: number;
}

export function PaginationDots({ count, activeIndex }: PaginationDotsProps) {
  const DOT_SIZE = 10;
  const DOT_ACTIVE_WIDTH = 10;

  return (
    <View className="flex-row items-center justify-center gap-xs py-xs">
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={{
            height: DOT_SIZE,
            width: i === activeIndex ? DOT_ACTIVE_WIDTH : DOT_SIZE,
            borderRadius: DOT_SIZE / 2,
            backgroundColor: i === activeIndex ? "#F97316" : "#E0E0E0",
          }}
        />
      ))}
    </View>
  );
}
