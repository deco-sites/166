import Image from "deco-sites/std/components/Image.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Game {
  src: LiveImage;
  alt: string;
  href?: string;
  label: string;
}

export interface Props {
  game?: Game[];
  title: string;
  bg_image: LiveImage;
}

function Game({ game = [], title, bg_image }: Props) {
  return (
    <div class="container mx-auto mt-10 bg-section">
      <h1 class="text-4xl font-bold text-left">{title}</h1>
      <hr class="my-3 border-orange-500 border-2"/>
      <div class="flex flex-wrap justify-center mt-4 space-x-6">
        {game.map(({ href, src, alt = "none", label = "none" }, index) => (
          <div key={index} class="w-1/2 sm:w-1/4 md:w-auto lg:w-auto">
            {href
              ? (
                <a href={href} class="card card-compact bg-base-100">
                  <figure class="flex justify-center">
                    <Image
                      class="rounded-[40px]"
                      src={src}
                      alt={alt}
                      width={190}
                      height={265}
                    />
                  </figure>
                </a>
              )
              : (
                <figure class="flex justify-center">
                  <Image
                    class="rounded-[40px]"
                    src={src}
                    alt={alt}
                    width={190}
                    height={265}
                  />
                </figure>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
