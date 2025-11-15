export default function VideoTutorial() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-video-title"
          >
            Guarda come funziona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri tutte le funzionalità di FuoriVolt nel video tutorial
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted animate-scale-in hover:shadow-[0_0_50px_rgba(0,212,255,0.3)] transition-all duration-500">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SVV3sYcRTVI"
              title="FuoriVolt - Come si usa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
              data-testid="iframe-youtube-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
