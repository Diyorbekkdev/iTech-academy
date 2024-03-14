'use client';

import { useLocaleLink } from '@/hooks/locale-link';
import { TLocale } from '@/types';

import Link from 'next/link';

interface IFooter {
  lang: TLocale;
}

export const Footer = ({ lang }: IFooter) => {
  const { LocaleLink } = useLocaleLink();
  return (
    <footer className="bg-[#F9FAFB]">
      <div className="container px-6 lg:px-0 py-9 lg:py-12 mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex px-4 justify-center lg:justify-start items-center">
          <LocaleLink
            href="/"
            className="font-bold text-transparent lg:text-black text-2xl lg:text-3xl bg-gradient-to-r from-primary to-pink bg-clip-text"
          >
            iTechAcademy
          </LocaleLink>
        </div>
        <div className="mt-6 mr-auto gap-6">
          <div className="mb-6 ">
            <span className="mr-4 inline-block">Kurslar</span>
            <span className="inline-block">Online ta'lim</span>
          </div>
          <p className="text-base text-[#667085] lg:text-center lg:max-w-sm">
            © “iTech”, 2024 - Barcha huquqlar himoyalangan.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-center lg:flex-col lg:items-end lg:mt-6">
          <ul className="flex px-4 gap-6  lg:mt-0 pb-6 ">
            <li className="">
              <Link
                className=""
                href="https://www.facebook.com/najottalim/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-107kjqc"
                  focusable="false"
                  aria-hidden="true"
                >
                  <g clipPath="url(#facebook_svg__a)">
                    <path
                      fill="#98A2B3"
                      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
                    />
                  </g>
                  <defs>
                    <clipPath id="facebook_svg__a">
                      <path
                        fill="#fff"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="">
              <Link
                className=""
                href="https://www.instagram.com/najottalim/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-10hkvz5"
                  focusable="false"
                  aria-hidden="true"
                >
                  <g fill="#98A2B3">
                    <path d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.7 3.7 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227-.216.558-.478.961-.895 1.378a3.7 3.7 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.7 3.7 0 0 1-1.379-.895 3.7 3.7 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07M12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.86 5.86 0 0 0-2.128 1.388A5.9 5.9 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.9 5.9 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07s3.666-.014 4.946-.07c1.275-.056 2.151-.262 2.91-.558a5.9 5.9 0 0 0 2.124-1.383 5.9 5.9 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.687.07-4.945s-.014-3.666-.07-4.946c-.057-1.275-.263-2.151-.558-2.91a5.6 5.6 0 0 0-1.374-2.133A5.9 5.9 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0" />
                    <path d="M12 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836m0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998M19.847 5.592a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0" />
                  </g>
                </svg>
              </Link>
            </li>
            <li className="">
              <Link
                className=""
                href="https://www.linkedin.com/company/najottalim/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-18ijywc"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#98A2B3"
                    d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0M7.12 20.452H3.558V8.995H7.12zM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125m15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457z"
                  />
                </svg>
              </Link>
            </li>
            <li className="">
              <Link
                className=""
                href="https://t.me/s/najottalim"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1s00fg9"
                  focusable="false"
                  aria-hidden="true"
                >
                  <g clipPath="url(#telegram_svg__a)">
                    <path
                      fill="#98A2B3"
                      fillRule="evenodd"
                      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M12.43 8.859q-1.75.728-6.998 3.014-.852.339-.893.663c-.046.366.412.51 1.034.705q.128.04.263.084c.613.199 1.437.432 1.865.441q.584.012 1.302-.48 4.902-3.31 5.061-3.346c.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504q-.143.145-.282.279c-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943q.21.14.405.28c.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2 2 0 0 0-.02-.472.5.5 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="telegram_svg__a">
                      <path
                        fill="#fff"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="">
              <Link
                className=""
                href="https://www.youtube.com/@najottalim"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1u4i12j"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#98A2B3"
                    d="M23.76 7.2s-.233-1.655-.955-2.381c-.914-.957-1.936-.961-2.405-1.018-3.356-.243-8.395-.243-8.395-.243h-.01s-5.039 0-8.395.243c-.469.057-1.49.061-2.405 1.018-.722.726-.951 2.38-.951 2.38S0 9.146 0 11.087v1.819c0 1.94.24 3.885.24 3.885s.233 1.655.95 2.382c.915.956 2.115.923 2.65 1.026 1.92.183 8.16.24 8.16.24s5.044-.01 8.4-.25c.469-.055 1.49-.06 2.405-1.016.722-.727.956-2.382.956-2.382S24 14.85 24 12.905v-1.82c0-1.94-.24-3.885-.24-3.885M9.52 15.112V8.367l6.483 3.384z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          <div className="flex px-4 gap-4 items-center">
            <span className="hidden lg:inline-block">Call-markaz</span>
            <p className="">
              <a
                className=""
                href="tel:+998788889888"
              >
                +998 78 888 9888
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
