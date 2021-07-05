//
// This component prevents broken image URL to be break layout
// by using a placeholder image in place if the provided image URL
// is not working (broken CDN, out of date register, etc)
//

import { useEffect, useState } from "react";
import Image from "next/image";
import env from "../../../environment";

// This cache is used to register what is the current image for a given resource,
// whether is the actual image URL (if valid) or a placeholder
// It doesnt have yet a scheduler to clear old cache entries, it will do it just when
// the cache is requested
const CACHE_DEFAULT_EXPIRATION = 10 * 60 * 1000; //10 minutes
const cache = {
  get: (key) => {
    const cacheEntryString = window.localStorage[key];
    if (!cacheEntryString) {
      return null;
    }
    const cacheEntry = JSON.parse(cacheEntryString);
    if (new Date().getTime() - cacheEntry.putTime > cacheEntry.expiration) {
      delete window.localStorage[key]; // as the cache has expired, remove from localStorage
      return null;
    }
    return cacheEntry;
  },
  set: (key, value, expiration = CACHE_DEFAULT_EXPIRATION) => {
    const cacheEntry = {
      url: value,
      putTime: new Date().getTime(),
      expiration,
    };
    // use localstorage as the cache storage
    window.localStorage[key] = JSON.stringify(cacheEntry);
  },
};

export const ResilientImage = ({
  src,
  width,
  height,
  alt,
  cacheExpiration = CACHE_DEFAULT_EXPIRATION,
}) => {
  const [imageSrc, setImageSrc] = useState(env.unavailableImageURL); // in case the image is not available, put a placeholder

  useEffect(() => {
    const checkImage = async () => {
      const cacheEntry = cache.get(src);
      let resolvedImageSrc = env.unavailableImageURL;
      if (!cacheEntry) {
        try {
          const fetchResult = await fetch(src);
          if (fetchResult.status === 200) {
            // case the image is OK, use it in the cache
            resolvedImageSrc = src;
          }
          cache.set(src, resolvedImageSrc, cacheExpiration);
        } catch (error) {
          console.warn("error setting image cache for", src);
          cache.set(src, resolvedImageSrc, cacheExpiration);
        }
      } else {
        resolvedImageSrc = cacheEntry.url;
      }
      setImageSrc(resolvedImageSrc);
    };

    checkImage();
  }, []);

  // Finally render the image with a valid URL, either the actual `src` or with placeholder
  return (
    <Image
      src={imageSrc}
      loader={myLoader}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

const myLoader = ({ src }) => {
  return src;
};
