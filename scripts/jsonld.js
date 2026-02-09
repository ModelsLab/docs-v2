// JSON-LD structured data for SEO
(function () {
  var schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ModelsLab API Documentation",
      "url": "https://docs.modelslab.com",
      "description": "Complete developer documentation for ModelsLab's AI API suite. Generate images, videos, audio, and 3D models with 10,000+ AI models.",
      "publisher": {
        "@type": "Organization",
        "name": "ModelsLab",
        "url": "https://modelslab.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docs.modelslab.com/logo/light.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://docs.modelslab.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ModelsLab",
      "url": "https://modelslab.com",
      "logo": "https://docs.modelslab.com/logo/light.png",
      "sameAs": [
        "https://x.com/ModelsLabAI",
        "https://github.com/ModelsLab",
        "https://www.linkedin.com/company/stablediffusion",
        "https://discord.com/invite/modelslab-1033301189254729748"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@modelslab.com",
        "contactType": "customer support",
        "url": "https://modelslab.com/support"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ModelsLab API",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free tier available with pay-as-you-go pricing"
      },
      "provider": {
        "@type": "Organization",
        "name": "ModelsLab",
        "url": "https://modelslab.com"
      }
    }
  ];

  schemas.forEach(function (schema) {
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
})();
