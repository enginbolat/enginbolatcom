import { Home } from "@/feature";

export default function Page() {
  return (
    <>
      <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Engin Bolat",
            url: "https://enginbolat.com",
            sameAs: [
              "https://twitter.com/enginnblt",
              "https://www.instagram.com/enginn.blt",
              "https://github.com/enginbolat",
            ],
            jobTitle: "Mobile Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          }),
        }}
      />
      <Home />
    </>
  );
}
