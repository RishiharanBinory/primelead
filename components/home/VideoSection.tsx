"use client";

const videos = [
  {
    id: "about",
    src: "/ABOUT-PRIMELEED.mp4",
    duration: "00:59",
  },
  {
    id: "empower",
    src: "/PRIMELEED-EMPOWER-PEOPLES-LIVES-THROUGH-EDUCATION.mp4",
    duration: "00:15",
  },
];

export default function VideoSection() {
  return (
    <section className="w-full bg-white pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 flex flex-col sm:flex-row gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative flex-1 overflow-hidden bg-black"
            style={{ aspectRatio: "16/9" }}
          >
            <video
              src={video.src}
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
