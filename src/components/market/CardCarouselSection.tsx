"use client";

import { Card, Skeleton, Tag, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Card as CardType } from "@/types/card";

const { Text, Title } = Typography;

interface CardCarouselSectionProps {
  cards: CardType[];
  isLoading: boolean;
  getCardImageUrl: (imageName: string | null | undefined) => string;
}

export default function CardCarouselSection({
  cards,
  isLoading,
  getCardImageUrl,
}: CardCarouselSectionProps) {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between mb-6 px-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">🃏</span>
          </div>
          <Title level={4} className="!mb-0 ">
            Featured Cards
          </Title>
        </div>
        <Link
          href="/cards"
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          View all
        </Link>
      </div>

      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="flex-shrink-0 w-[300px]">
                <Skeleton.Image active className="!w-full !h-[400px]" />
                <Skeleton active paragraph={{ rows: 2 }} className="mt-4" />
              </Card>
            ))
          : cards.map((card: CardType) => (
              <Card
                key={card.card_id}
                hoverable
                className="flex-shrink-0 w-[300px] overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                cover={
                  <div className="relative h-[300px] bg-gray-100">
                    <Image
                      src={getCardImageUrl(card.image_name)}
                      alt={card.name}
                      fill
                      className="object-contain p-2"
                      sizes="240px"
                    />
                    {card.rare && (
                      <Tag
                        color="gold"
                        className="absolute top-2 left-2 m-0 font-bold"
                      >
                        {card.rare}
                      </Tag>
                    )}
                  </div>
                }
                styles={{ body: { padding: "12px" } }}
              >
                <Text className="text-sm text-gray-700 line-clamp-2 h-10 font-medium">
                  {card.name}
                </Text>
                <div className="flex items-center gap-2 mt-2">
                  {card.color && (
                    <Tag color="blue" className="m-0 text-xs">
                      {card.color}
                    </Tag>
                  )}
                  {card.type && (
                    <Tag color="purple" className="m-0 text-xs">
                      {card.type}
                    </Tag>
                  )}
                </div>
              </Card>
            ))}
      </div>
    </div>
  );
}
