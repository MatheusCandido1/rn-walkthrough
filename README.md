On each branch, different libraries are used, and all features are tested on the corresponding unique branch.

# branch "react-native-copilot"

<p align="center">
  <img src="./react-native-copilot.gif" width="300" />
</p>

## Advantages
- React Native Copilot is easy to implement with no code change necessary, via simple CopilotStep wrappers over components.
- It provides seamless SVG-based overlays with animations and supports customizable tooltips that position themselves dynamically.
- The library provides cross-platform support, working equally well on both iOS and Android with no platform-specific code.
- Developers have the flexibility to customize appearances of tooltips and reorder or skip steps dynamically.

## Disadvantages
- The SVG overlays themselves may introduce performance overhead, especially on older platforms.
- The library does not provide intrinsic advanced functionalities such as voice support or video capability of some commercial counterparts.
- It is awkward to handle manual step numbering for large applications having numerous tour steps.
- Out of the box, dark mode or native A/B testing multiple tour flows isn't supported.
