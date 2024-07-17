const width: i32 = 512;
const height: i32 = 512;
const size: i32 = width * height;
const offset: i32 = size;

export function update(): void {
  // memory.fill(size * 4, 0, size);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) as i32;
      // const belowIndex = (((y + 1) % height) * width + x) as i32;
      // const randomIndex = Math.floor(Math.random() * size) as i32;
      // const flowTracker = load<u8>(size * 4 + index);
      // store<u8>(index * 4 + 2, 255);
      // store<u8>(index * 2 * 4 + 1, 255);
      // store<u8>(index * 2 * 4, 255);
      store<u8>((offset + index) * 4 + 3 + 4, 255);
      const b = load<u8>(index * 4 + 2);
      if (b > 20) {
        store<u8>((offset + (y + 1) * width + x) * 4 + 2, b);
      }
      store<u8>((offset + index) * 4 + 1 + 4, load<u8>(index * 4 + 1));
      store<u8>((offset + index) * 4 + 0 + 4, load<u8>(index * 4 + 0));
      // store<u8>(offset + index * 4, 255);
      // store<u8>(offset + index * 4 + 1, 255);
      // store<u8>(offset + index * 4 + 4, 255);
    }
  }
}
