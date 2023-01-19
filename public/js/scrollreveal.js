const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

sr.reveal(
    `.home-img,.home-text,
    .facilities-content,
     .doctor,.arrow,.item,.service-img`, {
        interval: 200,
    }
);