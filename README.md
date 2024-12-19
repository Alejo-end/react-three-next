A minimalist starter for NextJS, @react-three/fiber and Threejs.

### How to use

#### Installation

_Tailwind is the default style. styled-components (styled) are also available._

```sh
yarn create r3f-app next my-app
# yarn create r3f-app <next> my-app <tailwind|styled>? -ts?
# npx create-r3f-app next my-app
```

### :passport_control: Typescript

For typescript add the parameter `-ts` or `--typescript`:

```sh
yarn create r3f-app next my-app -ts
# npx create-r3f-app next my-app -ts
```

### :mount_fuji: Features

- [x] GLSL imports
- [x] Canvas is not getting unmounted while navigating between pages
- [x] Canvas components usable in any div of the page
- [x] Based on the App directory architecture
- [x] PWA Support

### :bullettrain_side: Architecture

Thanks to [tunnel-rat](https://github.com/pmndrs/tunnel-rat) the starter can portal components between separate renderers. Anything rendered inside the `<View/>` component of the starter will be rendered in the 3D Context. For better performances it uses gl.scissor to cut the viewport into segments.

```jsx
<div className='relative'>
  <View orbit className='relative sm:h-48 sm:w-full'>
    <Dog scale={2} />
    // Some 3D components will be rendered here
  </View>
</div>
```

### :control_knobs: Available Scripts

- `yarn dev` - Next dev
- `yarn analyze` - Generate bundle-analyzer
- `yarn lint` - Audit code quality
- `yarn build` - Next build
- `yarn start` - Next start

### ⬛ Stack

- [`create-r3f-app`](https://github.com/utsuboco/create-r3f-app) &ndash; Command line tool to simplify the installation.
- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei` - Optional](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`@react-three/a11y` - Optional](https://github.com/pmndrs/react-three-a11y/) &ndash; Accessibility tools for React Three Fiber
- [`r3f-perf` - Optional](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.
