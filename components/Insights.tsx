import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/content";

export function Insights() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            Notes from the shop floor.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative h-52 w-full overflow-hidden rounded-[var(--radius-md)] bg-gray-100">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {post.teaser}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
