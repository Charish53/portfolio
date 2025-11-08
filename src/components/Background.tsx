import LiquidEther from './LiquidEther';

interface BackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

const Background: React.FC<BackgroundProps> = ({ className = '', style = {} }) => {
  return (
    <div
      className={`section-background ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        ...style
      }}
    >
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={40}
        cursorSize={150}
        isViscous={false}
        viscous={20}
        iterationsViscous={16}
        iterationsPoisson={16}
        resolution={0.4}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.6}
        autoIntensity={2.0}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        dt={0.014}
        BFECC={false}
      />
    </div>
  );
};

export default Background;

