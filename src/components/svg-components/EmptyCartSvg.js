import React from "react";
import { useTheme } from "@mui/material";

const EmptyCartSvg = () => {
  const theme = useTheme();
  return (
    <div>
      <svg
        width="300"
        height="300"
        viewBox="0 0 502 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1708_27292)">
          <ellipse
            cx="286.5"
            cy="439"
            rx="140.5"
            ry="8"
            fill="#A0A0A0"
            fillOpacity="0.3"
          />
        </g>
        <g opacity="0.4" clipPath="url(#clip0_1708_27292)">
          <path
            d="M216.653 137.523C216.653 141.411 218.197 145.14 220.946 147.889C223.696 150.638 227.424 152.183 231.312 152.183C232.09 152.183 232.836 152.492 233.385 153.042C233.935 153.591 234.244 154.337 234.244 155.115C234.244 155.892 233.935 156.638 233.385 157.188C232.836 157.738 232.09 158.047 231.312 158.047C227.253 158.047 223.285 156.843 219.91 154.588C216.535 152.333 213.904 149.127 212.351 145.377C210.798 141.627 210.391 137.501 211.183 133.519C211.975 129.538 213.93 125.881 216.8 123.011C219.67 120.141 223.327 118.186 227.308 117.394C231.289 116.602 235.416 117.009 239.166 118.562C242.916 120.116 246.122 122.746 248.377 126.121C250.632 129.496 251.836 133.464 251.836 137.523L251.836 207.889C251.836 208.667 251.527 209.412 250.977 209.962C250.427 210.512 249.681 210.821 248.904 210.821C248.126 210.821 247.38 210.512 246.83 209.962C246.281 209.412 245.972 208.667 245.972 207.889L245.972 137.523C245.972 133.635 244.427 129.907 241.678 127.157C238.929 124.408 235.2 122.864 231.312 122.864C227.424 122.864 223.696 124.408 220.946 127.157C218.197 129.907 216.653 133.635 216.653 137.523V137.523ZM222.516 178.57C222.516 180.125 223.134 181.617 224.234 182.716C225.334 183.816 226.825 184.434 228.38 184.434C229.158 184.434 229.904 184.743 230.453 185.293C231.003 185.842 231.312 186.588 231.312 187.366C231.312 188.143 231.003 188.889 230.453 189.439C229.904 189.989 229.158 190.298 228.38 190.298C226.061 190.298 223.793 189.61 221.865 188.321C219.936 187.033 218.433 185.201 217.545 183.058C216.658 180.915 216.425 178.557 216.878 176.282C217.331 174.007 218.447 171.917 220.088 170.277C221.728 168.637 223.817 167.52 226.092 167.068C228.367 166.615 230.725 166.847 232.868 167.735C235.011 168.623 236.843 170.126 238.131 172.055C239.42 173.983 240.108 176.251 240.108 178.57L240.108 207.889C240.108 208.667 239.799 209.412 239.249 209.962C238.699 210.512 237.954 210.821 237.176 210.821C236.398 210.821 235.653 210.512 235.103 209.962C234.553 209.412 234.244 208.667 234.244 207.889L234.244 178.57C234.244 177.015 233.626 175.523 232.527 174.424C231.427 173.324 229.935 172.706 228.38 172.706C226.825 172.706 225.334 173.324 224.234 174.424C223.134 175.523 222.516 177.015 222.516 178.57V178.57ZM260.631 210.821C259.854 210.821 259.108 210.512 258.558 209.962C258.008 209.412 257.699 208.667 257.699 207.889L257.699 149.005C257.699 145.525 258.731 142.124 260.664 139.231C262.597 136.338 265.344 134.084 268.559 132.752C271.773 131.421 275.31 131.072 278.723 131.751C282.135 132.43 285.27 134.105 287.73 136.566C290.19 139.026 291.866 142.16 292.544 145.573C293.223 148.985 292.875 152.522 291.543 155.737C290.212 158.951 287.957 161.698 285.064 163.631C282.171 165.564 278.77 166.596 275.291 166.596C274.513 166.596 273.768 166.287 273.218 165.737C272.668 165.188 272.359 164.442 272.359 163.664C272.359 162.887 272.668 162.141 273.218 161.591C273.768 161.041 274.513 160.732 275.291 160.732C277.61 160.732 279.878 160.044 281.806 158.756C283.735 157.467 285.238 155.636 286.126 153.493C287.013 151.35 287.246 148.992 286.793 146.717C286.341 144.442 285.224 142.352 283.584 140.712C281.943 139.072 279.854 137.955 277.579 137.502C275.304 137.05 272.946 137.282 270.803 138.17C268.66 139.057 266.828 140.561 265.54 142.489C264.251 144.418 263.563 146.685 263.563 149.005L263.563 207.889C263.563 208.667 263.254 209.412 262.704 209.962C262.155 210.512 261.409 210.821 260.631 210.821Z"
            fill={theme.palette.primary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M325.342 114.873C325.311 114.973 325.3 115.078 325.311 115.182C325.322 115.287 325.354 115.387 325.405 115.479C325.456 115.57 325.526 115.65 325.609 115.713C325.692 115.777 325.788 115.823 325.889 115.848L328.472 116.54C328.904 116.656 329.343 116.394 329.514 115.981C330.346 114.003 332.155 112.884 334.666 113.557C336.813 114.132 338.491 115.732 337.799 118.315C337.266 120.302 335.851 120.903 333.628 121.797C331.112 122.763 328.965 124.103 328.306 127.037L328.133 127.718C328.082 127.925 328.113 128.143 328.221 128.326C328.329 128.51 328.504 128.643 328.71 128.698L331.248 129.378C331.456 129.434 331.677 129.405 331.863 129.297C332.049 129.19 332.185 129.013 332.24 128.805L332.328 128.477C332.931 126.229 333.96 125.804 336.736 124.673C339.031 123.734 341.449 122.658 342.354 119.28C343.622 114.551 340.24 111.196 335.867 110.024C331.901 108.961 327.062 109.644 325.342 114.873V114.873ZM325.382 134.218C324.935 135.886 325.935 137.476 327.766 137.966C329.672 138.477 331.314 137.595 331.761 135.927C332.224 134.199 331.235 132.632 329.329 132.122C327.501 131.632 325.845 132.49 325.382 134.218Z"
            fill={theme.palette.secondary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M227.78 43.7498C227.776 43.8544 227.793 43.9589 227.83 44.0567C227.868 44.1545 227.925 44.2437 227.998 44.3186C228.071 44.3936 228.159 44.4528 228.256 44.4926C228.353 44.5325 228.457 44.552 228.561 44.5502H231.235C231.682 44.5502 232.039 44.184 232.097 43.7401C232.389 41.6143 233.847 40.0653 236.446 40.0653C238.669 40.0653 240.704 41.1768 240.704 43.8502C240.704 45.908 239.492 46.8542 237.577 48.293C235.396 49.8776 233.669 51.728 233.792 54.7319L233.801 55.4351C233.805 55.6477 233.892 55.8505 234.043 55.9996C234.195 56.1488 234.399 56.2323 234.612 56.2323H237.24C237.454 56.2323 237.661 56.1469 237.812 55.995C237.964 55.8431 238.05 55.637 238.05 55.4222V55.0819C238.05 52.7552 238.934 52.0779 241.323 50.2665C243.296 48.7661 245.354 47.1005 245.354 43.604C245.354 38.7075 241.219 36.3419 236.692 36.3419C232.586 36.3419 228.088 38.2538 227.78 43.7498V43.7498ZM232.826 62.425C232.826 64.1522 234.203 65.4289 236.099 65.4289C238.072 65.4289 239.43 64.1522 239.43 62.425C239.43 60.6362 238.069 59.3789 236.096 59.3789C234.203 59.3789 232.826 60.6362 232.826 62.425Z"
            fill={theme.palette.secondary.main}
          />
        </g>
        <g opacity="0.4">
          <path
            d="M135.613 82.8358C135.662 82.9287 135.729 83.0106 135.81 83.0766C135.891 83.1426 135.985 83.1913 136.086 83.2197C136.187 83.248 136.293 83.2554 136.396 83.2415C136.5 83.2275 136.6 83.1925 136.69 83.1385L139.005 81.8018C139.392 81.5782 139.518 81.0828 139.347 80.6692C138.536 78.6824 139.025 76.6118 141.275 75.3124C143.2 74.2009 145.519 74.1459 146.855 76.4612C147.884 78.2433 147.308 79.6687 146.369 81.8723C145.272 84.3351 144.702 86.8011 146.31 89.3411L146.67 89.9452C146.779 90.1276 146.956 90.2598 147.162 90.3131C147.368 90.3665 147.586 90.3368 147.77 90.2305L150.046 88.9165C150.232 88.809 150.368 88.6321 150.424 88.4245C150.479 88.217 150.45 87.9959 150.343 87.8098L150.173 87.5151C149.009 85.5001 149.437 84.4713 150.6 81.7084C151.558 79.4223 152.508 76.9509 150.759 73.9228C148.311 69.6824 143.547 69.7012 139.627 71.9647C136.071 74.0176 133.132 77.9223 135.613 82.8358V82.8358ZM149.32 96.4863C150.184 97.9821 152.015 98.3992 153.657 97.4513C155.366 96.4646 155.903 94.68 155.04 93.1841C154.145 91.635 152.338 91.2267 150.629 92.2134C148.99 93.1596 148.426 94.9371 149.32 96.4863Z"
            fill={theme.palette.secondary.main}
          />
        </g>
        <circle
          cx="215.512"
          cy="398.169"
          r="12.482"
          transform="rotate(-8.91147 215.512 398.169)"
          stroke={theme.palette.secondary.main}
          stroke-width="7.36645"
        />
        <circle
          cx="328.718"
          cy="380.418"
          r="12.482"
          transform="rotate(-8.91147 328.718 380.418)"
          stroke={theme.palette.secondary.main}
          stroke-width="7.36645"
        />
        <path
          d="M208.527 333.813C208.177 331.58 206.083 330.053 203.85 330.404C201.617 330.754 200.091 332.848 200.441 335.081L208.527 333.813ZM225.585 368.627L225.973 372.701L225.585 368.627ZM331.173 356.213C333.402 355.844 334.91 353.736 334.54 351.507C334.17 349.277 332.063 347.769 329.833 348.139L331.173 356.213ZM303.167 319.18L301.718 315.353L301.718 315.353L303.167 319.18ZM318.278 304.59L314.671 302.656L314.671 302.656L318.278 304.59ZM129.724 228.316L126.353 230.637L126.353 230.637L129.724 228.316ZM179.09 298.606L175.73 300.942L179.09 298.606ZM328.255 275.188L324.332 274.023L328.255 275.188ZM157.274 267.23L153.914 269.566L157.274 267.23ZM205.584 334.531L205.028 330.476L205.584 334.531ZM201.672 332.796L205.043 330.475L201.672 332.796ZM281.326 209.597L285.409 209.866L281.326 209.597ZM351.013 199.509L354.94 200.661L351.013 199.509ZM273.963 321.148L278.047 321.418L273.963 321.148ZM240.618 326.343L244.435 324.868L240.618 326.343ZM339.094 238.691L343.017 239.856L339.094 238.691ZM208.339 358.624L212.173 357.192L208.339 358.624ZM196.588 223.726L236.8 327.818L244.435 324.868L204.223 220.777L196.588 223.726ZM245.703 332.954L271.147 328.965L269.88 320.879L244.435 324.868L245.703 332.954ZM278.047 321.418L285.409 209.866L277.242 209.327L269.88 320.879L278.047 321.418ZM275.974 201.241L202.955 212.69L204.223 220.777L277.242 209.327L275.974 201.241ZM200.441 335.081L204.128 358.594L212.214 357.327L208.527 333.813L200.441 335.081ZM204.505 360.056C206.401 365.133 213.076 373.93 225.973 372.701L225.197 364.553C217.129 365.322 213.225 360.009 212.173 357.192L204.505 360.056ZM225.973 372.701C236.934 371.657 300.809 361.25 331.173 356.213L329.833 348.139C299.231 353.215 235.787 363.544 225.197 364.553L225.973 372.701ZM75.634 208.835L107.86 203.782L106.592 195.696L74.366 200.749L75.634 208.835ZM206.14 338.585C221.823 336.434 244.603 333.214 264.289 330.219C274.129 328.722 283.217 327.279 290.266 326.052C293.788 325.439 296.828 324.875 299.209 324.383C301.477 323.913 303.445 323.451 304.616 323.008L301.718 315.353C301.252 315.529 299.922 315.877 297.55 316.368C295.291 316.835 292.348 317.382 288.863 317.988C281.899 319.2 272.877 320.633 263.058 322.127C243.426 325.114 220.688 328.329 205.028 330.476L206.14 338.585ZM304.616 323.008C309.12 321.303 312.375 319.482 315.111 316.698C317.741 314.022 319.66 310.672 321.884 306.525L314.671 302.656C312.408 306.876 310.975 309.229 309.273 310.961C307.678 312.585 305.621 313.875 301.718 315.353L304.616 323.008ZM321.884 306.525C322.476 305.422 323.237 303.455 324.076 301.118C324.954 298.672 326.021 295.517 327.229 291.83C329.645 284.451 332.653 274.851 335.877 264.345C342.328 243.329 349.671 218.619 354.94 200.661L347.086 198.356C341.822 216.298 334.49 240.972 328.053 261.944C324.833 272.432 321.844 281.976 319.451 289.283C318.253 292.938 317.213 296.011 316.373 298.352C315.493 300.802 314.926 302.181 314.671 302.656L321.884 306.525ZM107.86 203.782L126.353 230.637L133.094 225.994L114.602 199.14L107.86 203.782ZM126.353 230.637L198.302 335.117L205.043 330.475L133.094 225.994L126.353 230.637ZM345.816 190.29L129.09 224.273L130.358 232.359L347.084 198.376L345.816 190.29ZM160.634 264.894L335.171 237.526L333.903 229.44L159.366 256.807L160.634 264.894ZM335.171 237.526L324.332 274.023L332.178 276.353L343.017 239.856L335.171 237.526ZM324.332 274.023L182.45 296.27L183.718 304.356L325.599 282.109L324.332 274.023ZM182.45 296.27L160.634 264.894L153.914 269.566L175.73 300.942L182.45 296.27ZM182.45 296.27L182.45 296.27L175.73 300.942C177.52 303.516 180.622 304.841 183.718 304.356L182.45 296.27ZM324.332 274.023L324.332 274.023L325.599 282.109C328.719 281.62 331.279 279.38 332.178 276.353L324.332 274.023ZM159.366 256.807C153.396 257.744 150.464 264.605 153.914 269.566L160.634 264.894L160.634 264.894L159.366 256.807ZM205.028 330.476C205.028 330.476 205.028 330.476 205.03 330.476C205.031 330.476 205.033 330.476 205.035 330.477C205.039 330.477 205.043 330.478 205.045 330.479C205.047 330.48 205.048 330.481 205.048 330.481C205.048 330.481 205.046 330.48 205.043 330.475L198.302 335.117C200.046 337.65 203.064 339.007 206.14 338.585L205.028 330.476ZM107.86 203.782L107.86 203.782L114.602 199.14C112.816 196.547 109.702 195.208 106.592 195.696L107.86 203.782ZM285.409 209.866C285.755 204.632 281.156 200.428 275.974 201.241L277.242 209.327L277.242 209.327L285.409 209.866ZM354.94 200.661C356.637 194.876 351.719 189.364 345.816 190.29L347.084 198.376C347.095 198.374 347.101 198.374 347.103 198.374C347.106 198.374 347.106 198.374 347.104 198.374C347.102 198.373 347.099 198.373 347.096 198.372C347.093 198.372 347.09 198.371 347.088 198.37C347.083 198.368 347.082 198.367 347.083 198.368C347.085 198.369 347.088 198.371 347.091 198.375C347.093 198.377 347.094 198.378 347.095 198.38C347.096 198.381 347.096 198.382 347.096 198.382C347.096 198.381 347.094 198.378 347.092 198.37C347.091 198.366 347.09 198.362 347.09 198.357C347.089 198.352 347.089 198.348 347.089 198.345C347.089 198.341 347.09 198.34 347.09 198.341C347.089 198.342 347.089 198.347 347.086 198.356L354.94 200.661ZM271.147 328.965C274.929 328.372 277.795 325.237 278.047 321.418L269.88 320.879L269.88 320.879L271.147 328.965ZM236.8 327.818C238.189 331.412 241.896 333.551 245.703 332.954L244.435 324.868L244.435 324.868L236.8 327.818ZM335.171 237.526L335.171 237.526L343.017 239.856C344.73 234.09 339.846 228.508 333.903 229.44L335.171 237.526ZM204.128 358.594C204.195 359.02 204.306 359.521 204.505 360.056L212.173 357.192C212.212 357.297 212.219 357.354 212.214 357.327L204.128 358.594ZM204.223 220.777L204.223 220.777L202.955 212.69C197.8 213.499 194.708 218.859 196.588 223.726L204.223 220.777Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M162.789 157.678C166.889 134.802 184.407 135.397 193.658 138.874C194.243 139.094 194.571 139.723 194.452 140.337C189.907 163.8 172.592 162.851 163.548 159.106C162.992 158.875 162.683 158.271 162.789 157.678Z"
          fill="#ADCF19"
        />
        <path
          d="M158.376 158.184C146.405 138.263 159.986 127.181 169.238 123.71C169.824 123.49 170.484 123.748 170.799 124.289C182.821 144.944 169.161 155.626 159.886 158.759C159.316 158.952 158.686 158.7 158.376 158.184Z"
          fill="#CDE00F"
        />
        <path
          d="M195.905 157.154C177.394 150.168 129.098 154.685 107.263 157.817C107.808 172.925 116.191 184.915 120.314 189.022C126.297 195.094 142.854 208.013 168.019 199.055C191.278 190.774 196.529 168.393 195.905 157.154Z"
          fill="#FBE362"
        />
        <path
          d="M193.304 156.706C175.843 150.107 130.285 154.374 109.688 157.331C110.202 171.601 118.11 182.927 122 186.806C127.643 192.542 143.262 204.744 166.999 196.283C188.941 188.462 193.893 167.322 193.304 156.706Z"
          fill="#FBF9C2"
        />
        <path
          d="M116.804 163.277C116.227 172.673 121.409 177.59 124.072 178.875C125.157 179.544 127.22 178.864 128.117 178.44C135.516 175.551 142.59 165.243 144.727 162.259C146.436 159.871 144.432 158.933 143.216 158.762C132.137 156.686 120.96 159.603 118.941 160.293C117.326 160.845 116.844 162.513 116.804 163.277Z"
          fill="#FBEC52"
        />
        <path
          d="M131.685 187.011C138.152 193.85 145.283 193.425 148.041 192.357C149.271 192.023 150.183 190.05 150.486 189.106C153.431 181.729 150.735 169.522 150.015 165.923C149.439 163.043 147.385 163.866 146.429 164.637C137.345 171.311 131.84 181.466 130.965 183.412C130.265 184.968 131.153 186.459 131.685 187.011Z"
          fill="#FBEC52"
        />
        <path
          d="M157.622 192.257C166.995 193.118 172.067 188.087 173.431 185.464C174.134 184.4 173.516 182.317 173.119 181.408C170.455 173.925 160.366 166.542 157.448 164.317C155.113 162.536 154.114 164.511 153.907 165.721C151.497 176.732 154.075 187.992 154.703 190.031C155.206 191.662 156.858 192.194 157.622 192.257Z"
          fill="#FBEC52"
        />
        <path
          d="M181.888 177.978C189.047 171.866 188.984 164.723 188.057 161.915C187.786 160.67 185.862 159.658 184.934 159.308C177.716 155.993 165.388 158.066 161.757 158.603C158.852 159.032 159.569 161.126 160.291 162.119C166.495 171.53 176.359 177.542 178.257 178.515C179.776 179.293 181.311 178.482 181.888 177.978Z"
          fill="#FBEC52"
        />
        <path
          d="M132.974 167.879L138.615 164.329"
          stroke="black"
          stroke-width="4.04769"
          stroke-linecap="round"
        />
        <path
          d="M136.199 166.101L136.246 172.307"
          stroke="black"
          stroke-width="4.04769"
          stroke-linecap="round"
        />
        <path
          d="M172.371 167.584L166.678 164.119"
          stroke="black"
          stroke-width="4.04769"
          stroke-linecap="round"
        />
        <path
          d="M169.12 165.855L169.166 172.061"
          stroke="black"
          stroke-width="4.04769"
          stroke-linecap="round"
        />
        <path
          d="M143.591 180.213C146.399 176.819 155.172 173.542 160.726 180.085"
          stroke="black"
          stroke-width="4.04769"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_f_1708_27292"
            x="126"
            y="411"
            width="321"
            height="56"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_1708_27292"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1708_27292"
            x1="251.836"
            y1="210.821"
            x2="251.836"
            y2="108.471"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15D25" />
            <stop offset="1" stop-color="#FAA638" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1708_27292"
            x1="335.746"
            y1="109.992"
            x2="328.218"
            y2="138.087"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBAC3A" />
            <stop offset="1" stop-color="#F25F25" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1708_27292"
            x1="236.567"
            y1="36.3419"
            x2="236.567"
            y2="65.4289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBAC3A" />
            <stop offset="1" stop-color="#F25F25" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1708_27292"
            x1="139.519"
            y1="72.0273"
            x2="154.062"
            y2="97.2173"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBAC3A" />
            <stop offset="1" stop-color="#F25F25" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1708_27292"
            x1="215.512"
            y1="382.003"
            x2="215.512"
            y2="414.334"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15B24" />
            <stop offset="1" stop-color="#FBAE3B" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1708_27292"
            x1="328.718"
            y1="364.253"
            x2="328.718"
            y2="396.583"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15B24" />
            <stop offset="1" stop-color="#FBAE3B" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1708_27292"
            x1="211.454"
            y1="183.396"
            x2="240.196"
            y2="366.702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15B24" />
            <stop offset="1" stop-color="#FBAE3B" />
          </linearGradient>
          <clipPath id="clip0_1708_27292">
            <rect
              width="93.8211"
              height="93.8211"
              fill="white"
              transform="translate(204.925 210.821) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default EmptyCartSvg;