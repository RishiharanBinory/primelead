export type Review = {
  name: string;
  date: string;
  text: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="
      w-[256px] md:w-[320px]
      bg-[#f3f4f6] rounded-xl p-4 md:p-5
      flex flex-col gap-2.5 md:gap-3
      mx-2 md:mx-3 shrink-0
    "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Avatar */}
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#bfc5cc] flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              className="md:w-5.5 md:h-5.5"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[#1a2e3b] text-xs md:text-sm leading-tight">
              {review.name.length > 18
                ? review.name.slice(0, 18) + "..."
                : review.name}
            </p>
            <p className="text-[11px] md:text-xs text-gray-500">
              {review.date}
            </p>
          </div>
        </div>
        {/* Facebook icon */}
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#1877F2"
          aria-hidden="true"
          className="shrink-0 md:w-6.5 md:h-6.5"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="#1877F2"
            className="md:w-4.5 md:h-4.5"
          >
            <path d="M8 1l1.854 3.754L14 5.469l-3 2.922.708 4.129L8 10.354l-3.708 2.166L5 8.391 2 5.469l4.146-.715z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-xs md:text-sm text-[#374151] leading-relaxed line-clamp-4 flex-1">
        {review.text}
      </p>

      {/* Read more */}
      <button className="text-xs md:text-sm text-gray-400 text-left hover:text-gray-600 transition-colors w-fit">
        Read more
      </button>
    </div>
  );
}
