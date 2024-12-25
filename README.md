# Balimp 🎈

A modern, lightweight JavaScript library for smooth balloon-like animations and floating effects.

## Features

- 🪽 Lightweight and zero dependencies
- 🎯 Simple API for creating floating animations
- 🎨 Customizable animation parameters
- ⚡ High-performance animations using requestAnimationFrame
- 📱 Mobile-friendly and responsive
- 🌈 Easy integration with any JavaScript project

## Installation

```bash
npm install balimp
```

## Quick Start

```javascript
import { createBalimp } from 'balimp';

// Create a floating element
const element = document.querySelector('.float-me');
const balimp = createBalimp(element, {
  amplitude: 20,    // Float height
  frequency: 2,     // Speed of animation
  direction: 'y'    // Axis of movement
});

// Start animation
balimp.start();

// Stop animation
balimp.stop();
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| amplitude | number | 15 | Maximum distance to float |
| frequency | number | 1.5 | Animation speed |
| direction | string | 'y' | Animation axis ('x', 'y', or 'both') |
| easing | string | 'ease-in-out' | Animation easing function |
| random | boolean | false | Enable random movement |

## Examples

### Basic Floating Animation
```javascript
const balloon = createBalimp('.balloon', {
  amplitude: 30,
  frequency: 1
});
```

### Random Movement
```javascript
const cloud = createBalimp('.cloud', {
  amplitude: 20,
  frequency: 0.8,
  direction: 'both',
  random: true
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Yusuf Dankamu - [@yusadankamu](https://github.com/yusadankamu)

## Acknowledgments

- Inspired by natural floating movements
- Thanks to all contributors who have helped shape Balimp

---

Made with ❤️ by [yusadankamu](https://github.com/yusadankamu)
