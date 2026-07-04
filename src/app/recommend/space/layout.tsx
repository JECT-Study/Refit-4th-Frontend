import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리핏 추천 공간",
  description: "리핏(ReFit)에서 작가의 작품과 매칭할 수 있는 추천 전시 공간을 둘러보세요.",
  alternates: {
    canonical: "/recommend/space",
  },
};

export default function RecommendSpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
