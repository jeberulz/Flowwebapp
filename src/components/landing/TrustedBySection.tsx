export function TrustedBySection() {
  const logos = [
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png",
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png",
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png",
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png",
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png",
    "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png"
  ];

  return (
    <section className="max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative sm:px-6 lg:px-8 lg:mt-40">
      <div className="text-center">
        <p className="uppercase text-sm font-medium text-slate-400 tracking-wide font-['Poppins']">
          Trusted by 100,000+ young money makers
        </p>
      </div>
      <div className="overflow-hidden mt-6 relative">
        <div style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}>
          <div className="flex gap-10 will-change-transform animate-[marquee-left_30s_linear_infinite]">
            <div className="flex gap-10 shrink-0">
              {logos.map((logo, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="inline-flex items-center justify-center bg-center mix-blend-screen w-[140px] h-[36px] bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${logo})` }}
                />
              ))}
            </div>
            <div className="flex gap-10 shrink-0">
              {logos.map((logo, index) => (
                <a 
                  key={`duplicate-${index}`} 
                  href="#" 
                  className="inline-flex items-center justify-center bg-center mix-blend-screen w-[140px] h-[36px] bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${logo})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
