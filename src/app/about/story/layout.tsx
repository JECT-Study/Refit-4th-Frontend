import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리핏이 탄생한 이유",
  description:
    "리핏(ReFit)이 작가와 공간을 연결하는 전시 매칭 플랫폼으로 시작된 이유를 소개합니다.",
  alternates: {
    canonical: "/about/story",
  },
};

export default function AboutStoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
