export default function Name() {
  return (
    <div className="font-mono">
      <span className="p-0">J</span>
      <span className="p-0">u</span>
      <span className="p-0">a</span>
      <span className="p-0">n</span>
      <style>
        {`
            span{
                font-weight: 900;
                font-size: 24px;
                color: #ffffff;
                  2px 2px 3px rgba(0, 0, 0, 0.2),
                  -2px -2px 3px rgba(255, 255, 255, 0.8);
                position: relative;
                display: inline-block;
                transition: transform 0.3s ease-out;
                z-index: 1;
                padding: 0px 4px;
            }
            span:hover {
            transform: translateY(-7px);
            color: #444;
                2px 2px 5px rgba(0, 0, 0, 0.3),
                -2px -2px 5px rgba(255, 255, 255, 0.9);
            }
          `}
      </style>
    </div>
  );
}
