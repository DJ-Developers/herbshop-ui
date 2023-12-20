import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function LogoSimple({ disabledLink = false, className }) {
  const logo = (
    <div className={className}>
      <span className='sr-only'>Herbshop Company</span>
      <svg
        className='w-full h-full'
        viewBox='0 0 491.4 500'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip422_19468)'>
          <g opacity='0.540000'>
            <circle
              cx='247.200195'
              cy='139.600098'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='162.100098'
              cy='179.600098'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='139.600098'
              cy='270.800293'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='196.399902'
              cy='345.700195'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='290.300293'
              cy='348.700195'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='351.800293'
              cy='277.600098'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <g opacity='0.540000'>
            <circle
              cx='335.200195'
              cy='185.100098'
              r='139.600006'
              fill='#6CD30F'
            />
          </g>
          <path
            d='M275.8 468.7C263.3 458.9 254.8 431 263 413.5C263.3 413 263.6 412 263.9 411.3C264.3 410.4 264.7 409.6 265.2 408.7C265.5 408.1 265.9 407.4 266.2 406.8C266.7 406 267.2 405.1 267.8 404.3C268.1 403.8 268.5 403.3 268.8 402.8C269.4 402 270 401.3 270.6 400.5C270.7 400.4 270.8 400.2 271 400.1C271.2 399.9 271.3 399.7 271.5 399.5C271.8 399.2 272.1 398.8 272.4 398.5C272.9 397.9 273.4 397.4 274 396.8C274.1 396.7 274.2 396.5 274.4 396.4C274.6 396.2 274.8 396 275 395.8C275.3 395.5 275.6 395.2 275.9 394.9C278.1 392.9 280.4 391 283 389.1C283.4 388.8 283.7 388.5 284.1 388.3C284.3 388.1 284.6 388 284.8 387.8C285.5 387.3 286.2 386.8 287 386.3C287.3 386.1 287.7 385.8 288.1 385.6C288.4 385.4 288.7 385.2 289 385C289.1 384.9 289.2 384.9 289.2 384.8C289.7 384.5 290.2 384.1 290.7 383.8C290.9 383.6 291.2 383.5 291.5 383.3C293.8 381.8 296.2 380.4 298.8 378.9C299 378.8 299.2 378.7 299.4 378.6C300.9 377.8 302.5 376.9 304.1 376C304.6 375.7 305.1 375.4 305.6 375.2C305.9 375 306.3 374.8 306.7 374.6C306.8 374.6 306.8 374.5 306.9 374.5C307.5 374.2 308.2 373.8 308.9 373.5C309.4 373.2 309.9 372.9 310.5 372.6C317.6 368.8 325.3 364.9 333.4 360.7C333.6 360.6 333.9 360.5 334.1 360.3C334.9 359.9 335.7 359.5 336.5 359C339 357.7 341.6 356.3 344.3 354.9C344.5 354.8 344.6 354.7 344.8 354.6C347.5 353.1 350.3 351.6 353 350.1C362.6 344.7 371.6 339.4 380 334.1C381 333.4 382.1 332.8 383.1 332.1C387.2 329.4 391.1 326.7 394.9 324C396.2 323.1 397.5 322.1 398.7 321.1C400 320.2 401.3 319.2 402.5 318.1C408.7 313.1 414.3 308 419 302.6L419 302.7C425 296 429.7 289 433.1 281.4C430.8 284.3 428.3 287.1 425.8 289.7C412 304.5 394.7 316.5 374.6 324.3C374.3 324.5 373.9 324.6 373.6 324.7C371.9 325.4 370.3 326.1 368.8 326.6C368.1 326.8 367.5 327.1 366.9 327.3C365.6 327.7 364.4 328.1 363.3 328.5C362.7 328.7 362.2 328.8 361.7 329C361.4 329.1 361.2 329.2 360.9 329.2C360.5 329.3 360.2 329.4 359.9 329.5C359.5 329.6 359.1 329.7 358.8 329.8C358.9 329.7 358.9 329.6 359 329.4C359.4 328.6 359.8 327.9 360.2 327.1C360.6 326.3 361 325.5 361.3 324.7C361.7 323.9 362 323.1 362.3 322.3C363 320.7 363.5 319 364.1 317.3C364.7 315.6 365.1 313.9 365.5 312.2C365.9 310.5 366.3 308.7 366.6 307C367.1 304.4 367.4 301.8 367.7 299.2C367.8 298.4 367.9 297.6 367.9 296.8C368 296.1 368 295.5 368 294.8C368.8 281.1 366.7 268.4 363.8 261C363.7 262.9 363.6 264.8 363.4 266.7C363.3 268.5 363.1 270.2 362.9 271.9C362.8 272.3 362.8 272.7 362.8 273.1C362.6 274.6 362.4 276 362.2 277.4C362 278.8 361.8 280.2 361.6 281.5C361.3 283.5 360.9 285.5 360.5 287.4C360.2 288.9 359.8 290.5 359.5 292C359.5 292.1 359.5 292.1 359.5 292.1C359.1 293.6 358.7 295.1 358.3 296.6C358.3 296.7 358.2 296.8 358.2 296.9C357.8 298.3 357.4 299.6 357 300.9C356.6 302.1 356.2 303.2 355.8 304.3C355.6 304.9 355.4 305.4 355.2 306C354.4 308.2 353.5 310.4 352.5 312.4C352.2 313.1 351.9 313.7 351.5 314.4C350.2 317.2 348.7 319.8 347.1 322.3C346.6 323.1 346.1 324 345.5 324.7C344.6 326 343.7 327.3 342.7 328.6C342.3 329.1 341.9 329.6 341.5 330.1C340.7 331.1 339.8 332.1 338.9 333C338.4 333.6 337.8 334.2 337.2 334.8C336.5 335.5 335.7 336.3 335 337C334.2 337.8 333.3 338.5 332.4 339.3C331.6 340 330.8 340.6 329.9 341.2C329.7 341.4 329.5 341.5 329.3 341.6C328.6 342.2 327.8 342.7 327 343.2C326.9 343.3 326.8 343.3 326.8 343.4C325.9 344 325 344.6 324 345.1C323.1 345.7 322.2 346.2 321.2 346.7C321.1 346.8 321.1 346.8 321 346.8C320.3 347.2 319.7 347.5 319 347.8C317.8 348.4 316.5 349 315.2 349.5C314.6 349.8 314 350 313.3 350.3C312.5 350.6 311.7 350.9 310.9 351.2C310.3 351.4 309.6 351.6 309 351.9C308.6 352 308.3 352.1 307.9 352.2L306 352.8C305.1 353.1 304.1 353.3 303.1 353.5C302.5 353.7 302 353.8 301.4 353.9C299.4 354.3 297.3 354.7 295.2 355C272.4 358.1 265.9 343.5 271.9 324.5C272 324.3 272.1 324.1 272.1 323.8C272.5 322.6 272.9 321.4 273.4 320.2C274.9 316 276.6 312 278.3 308.1C279.7 305 281.2 301.9 282.7 298.8C285.3 297.2 288.1 295.6 291 293.8C294.6 291.6 298.1 289.5 301.4 287.5C302.2 287 303 286.5 303.8 286C304.2 285.7 304.7 285.4 305.1 285.2C305.7 284.9 306.3 284.5 306.8 284.1C307.1 283.9 307.4 283.7 307.7 283.5C308.7 282.8 309.8 282.1 310.8 281.5C311.7 280.9 312.5 280.4 313.3 279.8C313.5 279.7 313.6 279.6 313.8 279.4C314.3 279.1 314.8 278.7 315.4 278.3C315.7 278.1 316 277.9 316.2 277.7C316.4 277.6 316.6 277.5 316.7 277.3C319 275.7 321.2 274.1 323.3 272.6C324.2 272 325 271.3 325.8 270.7C329.9 267.6 333.8 264.5 337.5 261.4C338.2 260.8 338.9 260.2 339.6 259.6C340.3 259 341 258.4 341.7 257.7C343 256.5 344.4 255.3 345.7 254C347.5 252.3 349.2 250.6 350.8 248.9C352.1 247.6 353.3 246.2 354.5 244.9C357.8 241.2 360.7 237.6 363.3 233.9C380.7 209.6 384.4 184.8 382.7 155.2C381.4 189.4 366 214.3 348.5 231.7L348.3 231.9C346.4 233.8 344.4 235.6 342.5 237.3C340.5 239.1 338.4 240.8 336.4 242.4C335.7 243 335.1 243.5 334.4 244C333.7 244.5 333 245 332.4 245.6C330.4 247.1 328.4 248.4 326.5 249.7C325.8 250.1 325.2 250.6 324.6 251C324 251.4 323.3 251.8 322.7 252.2C322.1 252.6 321.4 253 320.8 253.4C316.4 256.1 312.3 258.3 308.8 260.1C308.1 260.5 307.4 260.8 306.8 261.1C306.6 261.2 306.5 261.2 306.4 261.3C306 261.5 305.7 261.6 305.3 261.8C304.4 262.2 303.5 262.6 302.8 263C302.6 263.1 302.5 263.2 302.3 263.2C302.1 263.3 302 263.4 301.8 263.4C301.7 263.4 301.6 263.5 301.5 263.5C301.4 263.601 301.3 263.601 301.2 263.601C301.1 263.7 301 263.7 300.9 263.8C300.3 264 299.8 264.3 299.3 264.5C299.7 263.5 300.1 262.5 300.5 261.5C300.6 261.3 300.6 261.2 300.7 261.101C301.1 260 301.6 258.8 302 257.7C302.6 256.2 303.1 254.7 303.6 253.2C303.9 252.2 304.3 251.3 304.6 250.3C304.9 249.5 305.2 248.601 305.4 247.7C305.6 247 305.8 246.3 306 245.601C306.2 244.8 306.5 243.9 306.7 243.101C307 241.8 307.4 240.5 307.6 239.2C307.9 238.101 308.1 237 308.3 235.9C308.5 235 308.6 234.2 308.8 233.3C309.1 231.601 309.4 229.8 309.6 228C309.8 226.9 309.9 225.8 310 224.7C310.2 223.2 310.3 221.7 310.4 220.2C310.5 219.3 310.5 218.3 310.6 217.4C310.7 216.2 310.7 215.101 310.8 213.9C310.9 211.2 310.9 208.4 310.8 205.601C310.4 188.8 306.5 174.8 302.7 165.101C302.3 164 301.8 162.9 301.4 161.9C301.1 161.2 300.8 160.601 300.5 160C299.5 157.8 298.5 156 297.7 154.5C297.2 153.601 296.7 152.8 296.3 152.2C295.8 151.4 295.4 150.9 295.2 150.7C295.3 150.9 295.3 151.2 295.4 151.4C295.6 152 295.7 152.7 295.9 153.3C296.1 154 296.2 154.601 296.4 155.3C297.4 159.2 298.2 163.601 298.9 168.4C299.1 170.101 299.4 171.8 299.6 173.601C299.8 175.4 300 177.2 300.1 179.101C300.4 183.601 300.6 188.3 300.5 193.3C300.5 194.101 300.5 194.9 300.4 195.7C300.4 197.4 300.3 199.101 300.2 200.9C300.1 202 300.1 203.2 300 204.3C300 204.8 299.9 205.3 299.9 205.7C299.9 206.5 299.8 207.3 299.7 208.1C299.6 209.5 299.4 210.9 299.3 212.3C299.3 212.4 299.3 212.5 299.2 212.601C299.2 212.8 299.1 213.1 299.1 213.3C299.1 213.5 299 213.7 299 213.9C299 214 299 214.101 299 214.101C298.9 214.7 298.8 215.3 298.7 215.9C298.7 216 298.7 216.101 298.6 216.2C298.5 217 298.4 217.7 298.3 218.5C298.3 218.7 298.2 218.9 298.2 219.2C298.1 219.5 298.1 219.7 298.1 220C298 220.8 297.8 221.5 297.7 222.3C297.5 223.3 297.3 224.3 297.1 225.2C297 225.601 296.9 226.101 296.8 226.5C296.7 227.101 296.5 227.8 296.4 228.4C296.3 228.8 296.2 229.2 296.2 229.601C296.2 229.7 296.1 229.8 296.1 229.9C295.9 230.8 295.7 231.7 295.5 232.601C295.2 233.7 294.9 234.9 294.7 236C294.7 236.101 294.6 236.3 294.6 236.4C294.5 237 294.3 237.6 294.1 238.2C293.8 239.2 293.6 240.2 293.3 241.1C293 242 292.8 243 292.5 244C292.4 244.3 292.3 244.7 292.2 245C292 245.8 291.7 246.5 291.5 247.3C291.4 247.6 291.3 247.9 291.2 248.2C291.1 248.7 290.9 249.1 290.8 249.6C290.8 249.7 290.8 249.7 290.7 249.8C290.7 249.8 290.7 249.8 290.7 249.9C290.5 250.4 290.4 250.9 290.2 251.4C290 252.1 289.7 252.8 289.4 253.5C289.3 253.9 289.1 254.3 289 254.7C288.9 255.1 288.7 255.5 288.6 255.9C288.4 256.4 288.2 256.9 288 257.3C287.9 257.5 287.8 257.7 287.8 257.9C287.2 259.4 286.7 260.8 286 262.3C285.9 262.4 285.9 262.5 285.8 262.7C285.6 263.1 285.4 263.6 285.2 264.1C285.1 264.4 285 264.6 284.9 264.9C284.6 265.5 284.4 266.1 284.1 266.8C283.9 267.2 283.8 267.6 283.6 268C283.1 269.1 282.6 270.2 282.1 271.3C282 271.5 281.9 271.7 281.8 272C281.5 272.6 281.2 273.2 280.9 273.8C280.8 274.1 280.7 274.4 280.5 274.6C280.1 275.5 279.6 276.4 279.1 277.3C278.6 278.3 278.1 279.4 277.5 280.4C276.9 281.4 276.2 282.4 275.6 283.3C275.3 283.7 275 284.1 274.7 284.5C274.1 285.3 273.5 286 272.8 286.8C272.6 287.1 272.3 287.4 272.1 287.6C271.4 288.3 270.7 289 270 289.5C269.7 289.8 269.4 290 269.1 290.3C268.5 290.8 267.9 291.2 267.2 291.6C266.6 292 265.9 292.3 265.3 292.6C265 292.7 264.7 292.9 264.4 293C263.8 293.3 263.2 293.5 262.6 293.7C261.7 294 260.8 294.2 259.8 294.3L260 294.3C259.5 294.4 259 294.4 258.5 294.4L258.3 294.4C257.7 294.4 257.1 294.4 256.5 294.4C256.2 294.4 256 294.4 255.7 294.3C255.6 294.3 255.4 294.3 255.3 294.3C254.9 294.2 254.5 294.2 254.1 294.1C253.8 294 253.5 294 253.3 293.9C253.2 293.9 253.2 293.9 253.1 293.9C252.8 293.8 252.5 293.7 252.3 293.7C252.2 293.7 252.1 293.6 252 293.6C251.4 293.4 250.9 293.2 250.4 293C250.3 293 250.3 292.9 250.2 292.9C250.1 292.9 250.1 292.8 250 292.8C249.7 292.7 249.4 292.5 249.1 292.4C248.9 292.3 248.8 292.2 248.7 292.2C248.4 292.1 248.2 291.9 247.9 291.8C247.7 291.7 247.6 291.6 247.5 291.6C247.2 291.4 246.9 291.3 246.7 291.1C246.5 291 246.4 290.9 246.3 290.8C245.3 290.1 244.5 289.5 243.9 288.9C243.8 288.8 243.7 288.7 243.6 288.6C243.4 288.4 243.1 288.1 242.7 287.7C242.3 287.3 241.9 286.9 241.4 286.4C241.3 286.3 241.1 286.1 241 286C240.8 285.8 240.6 285.6 240.4 285.4C240.1 285.1 239.7 284.7 239.4 284.4C239.1 284.1 238.7 283.7 238.4 283.4C238.2 283.2 238.1 283.1 237.9 283C228.1 271.8 223.9 257.1 223.9 242C223.9 240.9 223.9 239.8 224 238.7L224 238.2C224 237.9 224 237.7 224.1 237.4C224.1 237.2 224.1 237.1 224.1 236.9C224.1 236.3 224.2 235.7 224.2 235.1C224.2 235 224.2 234.9 224.2 234.8C224.3 234.1 224.3 233.4 224.4 232.6C224.4 232 224.5 231.4 224.6 230.9C224.6 230.8 224.6 230.6 224.7 230.5L224.8 229.9C224.9 229.5 224.9 229.1 225 228.7C225 228.5 225 228.3 225.1 228.2C225.1 228.1 225.1 228.1 225.1 228.1C225.2 227.6 225.2 227.2 225.3 226.7C225.3 226.6 225.4 226.4 225.4 226.3L225.4 226.2C225.5 225.5 225.7 224.8 225.8 224.2C225.9 223.6 226.1 223 226.2 222.4C226.4 221.4 226.7 220.3 226.9 219.3C227 219.1 227 218.9 227.1 218.7C227.3 218.1 227.4 217.5 227.6 216.9C227.8 216.2 228 215.6 228.2 214.9C228.3 214.7 228.3 214.6 228.4 214.4C228.7 213.3 229.1 212.2 229.5 211.2C229.7 210.7 229.9 210.2 230.1 209.6C230.3 209.1 230.5 208.6 230.7 208.1C230.8 207.9 230.9 207.7 230.9 207.5C231.1 206.9 231.4 206.2 231.7 205.6C232.1 204.7 232.5 203.7 233 202.8C235 198.5 237.2 194.5 239.7 190.7C240.3 189.8 240.9 188.9 241.5 188C242.2 187 242.9 186.1 243.7 185.1C243.8 185 243.9 184.9 243.9 184.8C245.5 182.8 247.1 181 248.8 179.3C249.1 179 249.4 178.7 249.6 178.5C251.4 176.7 253.4 175.1 255.3 173.7C255.1 173.8 254.9 174 254.6 174.1C249.8 176.9 245.6 179.7 241.7 182.7C241.1 183.2 240.5 183.6 239.9 184.1C235.5 187.6 231.7 191.3 228.5 195C228 195.5 227.5 196.1 227.1 196.6C227 196.7 226.9 196.8 226.8 196.9C226.4 197.5 225.9 198 225.5 198.5C224.1 200.3 222.8 202.1 221.6 203.9C221.3 204.3 221.1 204.7 220.8 205.1C219.5 207.2 218.3 209.2 217.3 211.3C217 211.8 216.8 212.3 216.6 212.8C216.6 212.8 216.6 212.8 216.6 212.9C215.3 215.5 214.3 218.1 213.4 220.6C213.4 220.7 213.3 220.8 213.3 220.9C213.1 221.4 212.9 221.9 212.8 222.4C212.6 222.9 212.5 223.4 212.3 223.9C212.3 224 212.2 224.2 212.2 224.3C212.1 224.7 212 225 211.9 225.4C211.7 226.2 211.5 227 211.3 227.8C211 228.8 210.8 229.8 210.6 230.8C210.6 231 210.5 231.2 210.5 231.4C210.5 231.5 210.5 231.5 210.5 231.5C210.5 231.6 210.4 231.7 210.4 231.8C210.4 232 210.3 232.1 210.3 232.3C210.2 232.8 210.1 233.3 210.1 233.7C210.1 233.8 210.1 233.8 210.1 233.9C210 234.8 209.9 235.7 209.8 236.5C209 234.5 208.2 232.5 207.5 230.4C207.4 230.2 207.4 230 207.3 229.8C206.9 228.7 206.5 227.6 206.2 226.4C205.8 225.3 205.5 224.1 205.2 223C204.9 222 204.6 221.1 204.4 220.1C204 218.7 203.7 217.3 203.4 215.9C203.2 214.8 202.9 213.7 202.7 212.6C202.7 212.6 202.7 212.6 202.7 212.5C202.6 212.1 202.5 211.7 202.5 211.4C199.8 197.8 199.1 183.8 199.9 170.3C200 169.3 200 168.4 200.1 167.4L200.1 167.2C200.2 166.5 200.2 165.9 200.3 165.2C200.4 164.7 200.4 164.3 200.4 163.8C200.5 162.9 200.6 162 200.7 161.1C200.7 160.9 200.8 160.7 200.8 160.5C200.9 159.8 201 159.1 201.1 158.4C201.2 158 201.2 157.6 201.3 157.2C201.3 157 201.3 156.9 201.4 156.8C201.5 156.4 201.5 156 201.6 155.6C201.7 155.2 201.7 154.7 201.8 154.3C201.8 154.2 201.8 154.1 201.9 154C202.1 152.9 202.2 151.8 202.4 150.8C202.5 150.1 202.7 149.4 202.8 148.6C204.2 140.8 206.2 133.4 208.6 126.6C208.9 125.7 209.3 124.7 209.6 123.8C209.9 122.9 210.3 122 210.6 121.1C211.2 119.7 211.7 118.3 212.3 117C212.8 115.8 213.4 114.5 214 113.4C214.8 111.8 215.6 110.2 216.4 108.6C216.8 107.8 217.3 107.1 217.7 106.3C218.6 104.8 219.5 103.4 220.4 102C220.9 101.3 221.3 100.7 221.8 100C222.7 98.7002 223.7 97.5 224.7 96.3003C225.2 95.7002 225.7 95.1001 226.3 94.5C226.8 94 227.2 93.5 227.7 93C228.1 92.5 228.6 92.1001 229 91.7002C210.9 107.4 198.4 127.8 191.4 150C190 154.4 188.8 158.9 187.8 163.5C187.6 164.4 187.4 165.3 187.2 166.3C186.3 170.9 185.7 175.5 185.2 180.1C185.1 181.2 185 182.4 184.9 183.5C184.8 184.6 184.8 185.7 184.7 186.8C184.6 188 184.6 189.2 184.6 190.4C184.6 191.6 184.5 192.7 184.5 193.9C184.5 195.8 184.5 197.7 184.6 199.5C181.6 198.4 178.8 197.2 176.1 195.9C175.5 195.6 175 195.3 174.4 195.1C174 194.9 173.5 194.6 173.1 194.4C172.4 194 171.7 193.6 171 193.2C168.8 191.9 166.7 190.5 164.7 189.1C164.2 188.7 163.7 188.4 163.2 188C160.2 185.7 157.4 183.2 154.8 180.6C154.4 180.2 153.9 179.7 153.5 179.2C151.3 176.8 149.3 174.4 147.4 172C146.9 171.3 146.4 170.7 146 170C143 165.7 140.5 161.4 138.3 157.2C137.7 156.1 137.2 154.9 136.7 153.8C135.8 151.8 134.9 149.7 134.1 147.7C133.8 147.1 133.6 146.4 133.4 145.8C133.4 145.7 133.3 145.6 133.3 145.5C132.9 144.3 132.5 143.1 132.1 142C127.7 128.7 126.8 118.7 126.8 118.7C125.7 127.2 125.7 135.2 126.5 142.6C127.3 150.2 129 157.2 131.3 163.7C138.3 183.2 150.9 197.8 163 208.1C163.6 208.7 164.3 209.2 164.9 209.7C165.1 209.8 165.2 210 165.4 210.1C166.2 210.8 167 211.4 167.8 212C168.5 212.6 169.2 213.1 170 213.7C170.4 214 170.8 214.3 171.1 214.5C171.5 214.8 171.9 215.1 172.3 215.4C172.4 215.5 172.5 215.5 172.6 215.6C172.9 215.8 173.2 216 173.5 216.3C174.3 216.9 175.1 217.4 175.9 217.9C175.9 217.9 175.9 217.9 176 218C176.8 218.5 177.5 219 178.2 219.4C178.3 219.5 178.5 219.6 178.6 219.6C179.2 220 179.8 220.4 180.4 220.7C180.6 220.8 180.8 220.9 181 221.1C181.5 221.4 182 221.7 182.4 222L182.5 222C183.2 222.4 183.9 222.8 184.5 223.2C184.8 223.4 185.1 223.5 185.3 223.6C185.6 223.8 185.9 223.9 186.1 224.1C186.4 224.3 186.7 224.4 186.9 224.5C187.2 224.7 187.4 224.8 187.7 224.9C189.4 232.7 191.7 240.5 194.7 247.9C194.7 247.9 194.7 247.9 194.8 247.9C197.4 254.4 200.4 260.7 204 266.7C204.4 267.4 204.8 268.1 205.3 268.7C205.3 268.7 205.3 268.7 205.3 268.6C206.6 270.6 207.8 272.6 209.2 274.6C209.3 274.8 209.4 274.9 209.5 275C210 275.7 210.5 276.4 211 277.1C213.2 280 215.4 283 217.7 286C218.6 287.1 219.4 288.2 220.4 289.3C221.5 290.7 222.6 292 223.8 293.4C225.7 295.7 227.7 297.9 229.7 300.1L230 300.4C230.9 301.4 231.8 302.3 232.7 303.3C233.4 304.1 234.1 304.9 234.7 305.7C234.9 305.9 235 306.1 235.2 306.3C235.3 306.5 235.4 306.6 235.5 306.7C235.8 307.1 236.1 307.4 236.3 307.8C236.7 308.4 237.2 309 237.6 309.6C239 311.8 240.1 313.8 240.7 315.6C240.9 316 241 316.4 241.1 316.8C241.4 317.6 241.5 318.3 241.6 319C241.9 320.7 241.8 322.2 241.5 323.5C241.4 323.9 241.3 324.2 241.2 324.6C241.2 324.6 241.2 324.6 241.2 324.7C240.9 325.4 240.6 326.1 240.1 326.7C239.9 327 239.7 327.3 239.4 327.5C239.4 327.5 239.4 327.5 239.4 327.6C238.5 328.6 237.2 329.5 235.8 330.2C235.6 330.3 235.3 330.4 235.1 330.5C234.4 330.8 233.7 331.1 232.9 331.3C232 331.5 231 331.7 230 331.8C229 331.9 227.9 332 226.8 332C225.9 332 224.9 332 223.9 331.9C223.8 331.9 223.8 331.9 223.7 331.9C223.2 331.8 222.6 331.8 222.1 331.7C221.6 331.6 221 331.5 220.5 331.5L220.4 331.5C219.2 331.3 218 331 216.8 330.6C216.3 330.5 215.9 330.3 215.4 330.2C214.7 330 214.1 329.8 213.5 329.5C213.2 329.4 212.9 329.3 212.6 329.2C211.5 328.8 210.3 328.3 209.2 327.7C208.5 327.4 207.8 327 207.2 326.7C207.2 326.7 207.2 326.7 207.1 326.7C206.7 326.5 206.2 326.3 205.8 326C205.2 325.7 204.6 325.3 204.1 325C203.5 324.7 202.9 324.3 202.4 323.9C201.8 323.5 201.3 323.1 200.7 322.7C198.2 320.9 195.8 319.2 193.5 317.4C192.9 317 192.3 316.5 191.7 316C189.9 314.6 188.2 313.3 186.5 311.9C185.9 311.4 185.3 311 184.7 310.5C184.6 310.4 184.6 310.4 184.5 310.3C183.2 309.3 182 308.3 180.8 307.3C180.7 307.2 180.7 307.2 180.6 307.2C180.3 306.9 179.9 306.6 179.6 306.4C179.1 306 178.6 305.5 178.1 305.1C177.4 304.5 176.7 303.9 175.9 303.2C174.8 302.2 173.6 301.2 172.5 300.2C172.1 299.9 171.7 299.5 171.4 299.2C170.8 298.7 170.3 298.2 169.7 297.7C168.9 297 168.2 296.3 167.4 295.5C167.2 295.3 166.9 295.1 166.7 294.8L165.8 293.9C159.2 287.6 153.2 281 147.7 274.2C147.7 274.1 147.6 274.1 147.6 274.1C146.2 272.3 144.8 270.6 143.4 268.7C143.2 268.4 143 268.1 142.8 267.9C141.5 266.2 140.3 264.5 139.1 262.8C138.8 262.4 138.5 262 138.2 261.5C137.1 259.9 136 258.3 135 256.6C134.6 256 134.2 255.3 133.8 254.7C132.9 253.2 132 251.7 131.1 250.2C129.8 248 128.6 245.9 127.5 243.7C126.7 242 125.8 240.4 125 238.7C124.3 237.4 123.7 236 123.1 234.7C123 234.5 122.9 234.3 122.8 234.1C117.1 221.6 112.7 208.3 109.6 193.8C108.8 209.8 111.2 224.8 115.8 238.9C117.5 244.1 119.5 249.2 121.8 254.2C122.2 255.2 122.7 256.1 123.1 257.1C124.5 260 125.9 262.7 127.4 265.5C125.7 265.6 124 265.6 122.3 265.6C120.9 265.6 119.4 265.6 118 265.5C116.9 265.4 115.8 265.4 114.7 265.3C114.3 265.3 113.8 265.2 113.3 265.2C112.1 265.1 111 265 109.8 264.9C107.2 264.6 104.7 264.2 102.3 263.7C101.1 263.5 100 263.2 98.8999 263C98.7998 263 98.7998 262.9 98.7002 262.9C97.5 262.6 96.3999 262.3 95.2998 262C94.2002 261.7 93.1001 261.4 92 261C62.1001 251.4 51.2002 229.2 50 226.6C57.1001 246.5 71.2998 259.5 86.5 268C86.8999 268.2 87.2998 268.4 87.7002 268.7C88.6001 269.2 89.5 269.6 90.3999 270.1C91.7002 270.8 93 271.4 94.2998 272C94.3999 272.1 94.3999 272.1 94.5 272.1C95.5 272.6 96.6001 273 97.6001 273.5C99.3999 274.3 101.2 275 102.9 275.6C103.9 276 104.8 276.3 105.8 276.6C115.4 279.9 124.3 281.7 131 282.7C131.8 282.8 132.6 282.9 133.3 283C135.3 283.3 137.1 283.5 138.5 283.6C139.6 285.2 140.8 286.8 142 288.4C143.2 290.1 144.4 291.7 145.7 293.2C148.5 296.8 151.4 300.3 154.4 303.8C155 304.5 155.6 305.1 156.2 305.8C159.3 309.3 162.4 312.7 165.5 316C171 321.7 176.6 327.2 181.9 332.1C182 332.2 182 332.3 182.1 332.3C180.3 332.5 178.5 332.7 176.7 332.8C175.5 332.9 174.3 332.9 173.1 333C172.9 333 172.8 333 172.6 333.1L172 333.1C171.2 333.2 170.4 333.2 169.6 333.3C167.7 333.4 165.8 333.4 163.9 333.4C162.9 333.4 161.8 333.4 160.8 333.4C160.6 333.4 160.5 333.4 160.3 333.4C159.7 333.4 159 333.4 158.4 333.3C158.1 333.3 157.9 333.3 157.7 333.3C157.4 333.3 157.1 333.3 156.9 333.2L156.7 333.2C156.2 333.2 155.7 333.1 155.2 333.1C155 333.1 154.8 333.1 154.6 333.1C153.6 333 152.6 333 151.6 332.9C151 332.8 150.4 332.8 149.8 332.7C149.4 332.7 148.9 332.6 148.5 332.6C147.6 332.5 146.6 332.4 145.7 332.3C143.2 332 140.7 331.6 138.3 331.2C137.3 331 136.4 330.8 135.4 330.6C135.1 330.5 134.8 330.5 134.5 330.4C133.6 330.2 132.7 330 131.8 329.8C130.9 329.6 130 329.4 129.2 329.2C128.4 329 127.7 328.8 126.9 328.6C126.2 328.4 125.5 328.2 124.7 328C124.4 327.9 124.2 327.9 123.9 327.8C122.7 327.5 121.6 327.1 120.4 326.8C119.7 326.6 119 326.4 118.3 326.1C117.7 325.9 117.1 325.7 116.6 325.5C115.8 325.2 115 324.9 114.2 324.7C114 324.6 113.8 324.6 113.7 324.5C113.3 324.3 112.8 324.2 112.4 324C112.1 323.9 111.7 323.8 111.4 323.6C111.2 323.5 111.1 323.5 110.9 323.4C110.6 323.3 110.2 323.1 109.9 323C108.5 322.4 107.2 321.9 105.9 321.3C105.7 321.2 105.5 321.1 105.3 321C104.7 320.7 104.1 320.4 103.5 320.2C103.3 320.1 103 320 102.8 319.9C100.9 319 99 318 97.1001 317.1C96.8999 317 96.7002 316.9 96.5 316.8C95.7998 316.4 95.1001 316 94.2998 315.6C93.6001 315.2 92.8999 314.8 92.2002 314.4C91.7002 314.1 91.1001 313.8 90.6001 313.5C89.7998 313 88.8999 312.5 88.2002 312C88.1001 311.9 88 311.9 87.8999 311.8C86.7998 311.1 85.6001 310.4 84.6001 309.7C84.3999 309.5 84.2002 309.4 84 309.3C83.7002 309.1 83.3999 308.9 83.1001 308.6C82.6001 308.3 82.1001 307.9 81.6001 307.6C81.6001 307.6 81.5 307.6 81.5 307.5C81.2002 307.3 80.7998 307 80.5 306.8C80.1001 306.5 79.7998 306.3 79.3999 306C79.2998 306 79.2998 305.9 79.2002 305.9C77.8999 305 76.7002 304.1 75.5 303.2C75.2002 303 74.8999 302.7 74.6001 302.5C72.6001 300.9 70.7002 299.4 69.1001 297.9C63.3999 292.8 60.1001 289.1 59.5 288.3C59.5 288.2 59.3999 288.2 59.3999 288.2C60.8999 292.7 63.6001 297.5 67.2998 302.3C69 304.5 70.8999 306.8 73 309C73.1001 309.1 73.2002 309.2 73.2998 309.3C73.8999 310 74.6001 310.6 75.2002 311.2C75.8999 311.9 76.6001 312.6 77.3999 313.3C77.5 313.4 77.5 313.4 77.6001 313.5C78.3999 314.2 79.2002 315 80.1001 315.7C80.7002 316.3 81.2998 316.8 82 317.3C83.1001 318.2 84.2998 319.1 85.3999 320.1C86.2998 320.8 87.2998 321.5 88.2998 322.2C90.2998 323.7 92.3999 325.1 94.7002 326.6C95.5 327.1 96.2998 327.6 97.2002 328.1C101.9 331 107 333.8 112.5 336.4C113.6 336.9 114.7 337.4 115.8 337.9L115.9 338C116.9 338.4 117.9 338.9 118.9 339.3C119.6 339.6 120.4 339.9 121.1 340.2C122 340.6 122.9 341 123.9 341.3C127.2 342.6 130.7 343.9 134.2 345C135.4 345.4 136.5 345.8 137.7 346.2C139.2 346.7 140.7 347.1 142.2 347.5C143.2 347.8 144.2 348.1 145.2 348.3C145.8 348.5 146.4 348.6 147 348.8C147.4 348.9 147.8 349 148.2 349.1C149.7 349.5 151.2 349.8 152.7 350.2C154.2 350.6 155.7 350.9 157.3 351.2C158.6 351.5 160 351.8 161.3 352C161.5 352 161.7 352.1 161.9 352.1C163.4 352.4 165 352.7 166.6 352.9C166.7 352.9 166.8 353 166.9 353C167.5 353.1 168.1 353.2 168.6 353.3C169.5 353.5 170.4 353.6 171.4 353.7C173 353.9 174.6 354.1 176.3 354.3C177.7 354.5 179.1 354.6 180.5 354.8C180.7 354.8 180.8 354.8 181 354.9C182.8 355.1 184.6 355.2 186.4 355.3C187.1 355.4 187.8 355.4 188.5 355.5C188.8 355.6 189.2 355.6 189.5 355.7C189.6 355.7 189.6 355.7 189.7 355.7C190.1 355.8 190.4 355.8 190.8 355.9C190.9 355.9 191 355.9 191.1 356C191.2 356 191.2 356 191.3 356C191.8 356.1 192.3 356.2 192.7 356.3C192.9 356.4 193.1 356.4 193.4 356.5C193.6 356.5 193.7 356.6 193.9 356.6C195.7 357.1 197.4 357.7 199 358.5C199.4 358.7 199.9 358.9 200.3 359.1C200.4 359.1 200.5 359.2 200.6 359.2C201.1 359.4 201.5 359.7 201.9 359.9C203.4 360.8 204.9 361.8 206.3 363C206.7 363.3 207.1 363.7 207.5 364C207.9 364.4 208.4 364.8 208.8 365.2C209.2 365.6 209.6 366 210 366.4C210.8 367.2 211.6 368.1 212.3 369.1C212.7 369.5 213 370 213.4 370.5C214.5 371.9 215.4 373.4 216.3 375C216.9 376 217.4 377.1 218 378.2C218.4 378.9 218.7 379.6 219 380.3C219.2 380.8 219.4 381.2 219.6 381.7C219.9 382.3 220.1 382.9 220.3 383.5C220.9 385.3 221.5 387.1 222 389C222.2 389.6 222.3 390.3 222.5 390.9C222.8 392.2 223.1 393.5 223.3 394.8C226.8 413.6 223.8 435.8 214.5 453.6C214.5 453.7 214.4 453.8 214.4 453.9C194.3 491.1 140.2 488.6 135.9 488.9C135.8 489.4 217.2 499.1 242.4 499.1C268.2 499.1 328.8 496.8 351.7 488.6C352 489.5 311.6 496.9 275.8 468.7Z'
            fillRule='nonzero'
            fill='#FFFFFF'
          />
        </g>
        <defs>
          <clipPath id='clip422_19468'>
            <rect width='491.399994' height='500.000000' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
  if (disabledLink) {
    return <>{logo}</>
  }

  return <Link href='/'>{logo}</Link>
}
