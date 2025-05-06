import Image from 'next/image';

export default function FlagDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Left Flag */}
      <div className="absolute top-4 left-4 w-16 h-24 transform -rotate-12">
        <Image
          src="/images/flags/egyptian-flag.svg"
          alt="Egyptian Flag"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Top Right Flag */}
      <div className="absolute top-4 right-4 w-16 h-24 transform rotate-12">
        <Image
          src="/images/flags/egyptian-flag.svg"
          alt="Egyptian Flag"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Bottom Left Flag */}
      <div className="absolute bottom-4 left-4 w-16 h-24 transform rotate-12">
        <Image
          src="/images/flags/egyptian-flag.svg"
          alt="Egyptian Flag"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Bottom Right Flag */}
      <div className="absolute bottom-4 right-4 w-16 h-24 transform -rotate-12">
        <Image
          src="/images/flags/egyptian-flag.svg"
          alt="Egyptian Flag"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
} 