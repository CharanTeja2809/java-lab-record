function showWeek(week) {

    const content = document.getElementById("content");

    const weeks = {

        1: `
             <h2>Week 1 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-1</h3>

                <p>
                    Add your Week 1 laboratory questions,
                    programs and explanations here.
                </p>

            </div>
        `,

        2: `
            <h2>Week 2 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-2</h3>

                <p>
                    Add your Week 2 laboratory questions,
                    programs and explanations here.
                </p>

            </div>
        `,

        3: `
            <h2>Week 3 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-3</h3>

                <p>
                    Add your Week 3 content here.
                </p>

            </div>
        `,

        4: `
            <h2>Week 4 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-4</h3>

                <p>
                    Add your Week 4 content here.
                </p>

            </div>
        `,

        5: `
            <h2>Week 5 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-5</h3>

                <p>
                    Add your Week 5 content here.
                </p>

            </div>
        `,

        6: `
            <h2>Week 6 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-6</h3>

                <p>
                    Add your Week 6 content here.
                </p>

            </div>
        `,

        7: `
            <h2>Week 7 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-7</h3>

                <p>
                    Add your Week 7 content here.
                </p>

            </div>
        `,

        8: `
            <h2>Week 8 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-8</h3>

                <p>
                    Add your Week 8 content here.
                </p>

            </div>
        `,

        9: `
            <h2>Week 9 Content</h2>
            <hr>

            <div class="content-box">

                <h3>WEEK-9</h3>

                <p>
                    Add your Week 9 content here.
                </p>

            </div>
        `
    };

    content.innerHTML = weeks[week];
}
