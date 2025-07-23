"use client"
import Image from "next/image";
import truncateText from "../../../../utils/truncateText";
import { Rating } from "@mui/material";
import formatPrice from "../../../../utils/formatPrice";
import { useRouter } from "next/navigation";

interface ProductCartProps {
  data: any;
}

const ProductCart = ({ data }: ProductCartProps) => {
  const router = useRouter();
  const avgRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="p-2 rounded-md border-[1.2px] border-slate-200 hover:scale-105 transition text-center cursor-pointer text-sm"
    >
      <div className="flex flex-col items-center justify-center gap-1 w-full">
        <div className="w-full relative aspect-square ">
          <Image
            src={data.images[0].image}
            fill
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <Rating value={avgRating} readOnly />
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCart;
