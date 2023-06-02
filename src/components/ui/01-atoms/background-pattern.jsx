import "css-doodle";

export default function backgroundPattern() {

  return (
      <css-doodle use={`
        @grid: 1 / 100%;
        transform: scale(1.5);
        background-size: 150px 150px;
        background-image: @doodle(
            transform: rotate(45deg);
            @grid: 7 / 100vmax / #E32002;
            clip-path: @shape(
                points: 300;
                frame: 100;
                r: sin(8t)/3^cos(5t)/3;
            );
            background: #FA91AA;
        );
      `}>
      </css-doodle>
  );
}
