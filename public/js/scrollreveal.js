const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1500,
    reset: true,
});

sr.reveal(
    `.home-img,.home-text,
    .facilities-content,
    .arrow,.item,.service-img`, {
        interval: 150,
    }
);