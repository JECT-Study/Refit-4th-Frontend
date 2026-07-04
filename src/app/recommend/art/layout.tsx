import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리핏 추천 작품",
  description: "리핏(ReFit)에서 전시 공간과 매칭할 수 있는 추천 작품을 둘러보세요.",
  alternates: {
    canonical: "/recommend/art",
  },
};

export default function RecommendArtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
