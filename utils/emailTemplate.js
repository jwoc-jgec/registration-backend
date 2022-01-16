const getMenteeEmail = (menteeName) => {
  return `
    <div
            style="
                padding: 20px 10px;
                background: url(https://jwoc2k22.vercel.app/email/assets/banner_bg.png)
                        no-repeat 50% 50% / cover,
                    linear-gradient(315deg, #0d1524 0%, #0f1927 80%);
                border-radius: 10px;
            "
        >
            <div
                style="
                    padding: 20px 10px;
                    background: rgba(15, 25, 39, 0.7);
                    border-radius: 10px;
                "
            >
                <div style="text-align: center">
                    <img
                        style="margin: auto; width: 120px; height: auto"
                        src="https://jwoc2k22.vercel.app/email/assets/jwoc_logo.png"
                        alt="JWoC Logo"
                    />
                </div>
                <h2
                    style="
                        margin: 0 auto 20px;
                        font-size: 30px;
                        font-weight: 600;
                        font-family: serif;
                        color: #ffffff;
                        text-shadow: 1px 1px #5800ff, -1px -1px #5800ff;
                        text-align: center;
                        letter-spacing: 0.6px;
                    "
                >
                    Welcome to JWoC!
                </h2>
                <p
                    style="
                        margin: 10px auto;
                        font-size: 16px;
                        font-weight: 500;
                        font-family: sans-serif;
                        color: #eef2ff;
                        text-align: center;
                        line-height: 1.5;
                        letter-spacing: 0.6px;
                    "
                >
                    <span
                        style="
                            margin: 10px auto;
                            display: block;
                            font-size: 22px;
                            font-weight: 700;
                            font-family: monospace;
                            color: #c9f658;
                        "
                    >
                        Hey ${menteeName}!
                    </span>
                    JGEC Winter of Code 2K22 extends a warm welcome to you. We
                    are excited to share that you have successfully registered
                    for the open-source extravaganza and we whole-heartedly look
                    forward to your active participation as a Mentee in the
                    event.
                </p>
                <p
                    style="
                        margin: 20px auto;
                        font-size: 16px;
                        font-weight: 500;
                        font-family: sans-serif;
                        color: #eef2ff;
                        text-align: center;
                        line-height: 1.5;
                        letter-spacing: 0.6px;
                    "
                >
                    As a mandatory step, we request you to join our official
                    Discord server via this link:
                    <a
                        href="https://discord.com/"
                        style="
                            display: block;
                            margin: 10px auto;
                            padding: 8px 18px;
                            width: fit-content;
                            font-size: 18px;
                            font-weight: 600;
                            font-family: sans-serif;
                            color: #ffffff;
                            background: #404eed;
                            text-align: center;
                            text-decoration: none;
                            border-radius: 6px;
                            letter-spacing: 0.6px;
                        "
                    >
                        <img
                            src="https://jwoc2k22.vercel.app/email/assets/discord_icon.png"
                            style="
                                width: 30px;
                                height: auto;
                                vertical-align: top;
                            "
                            alt="Discord"
                        />
                        <span style="vertical-align: sub">
                            Join Community
                        </span>
                    </a>
                </p>
                <div
                    style="
                        height: 4px;
                        width: 100%;
                        border-radius: 4px;
                        background: linear-gradient(
                            90deg,
                            #ff0000 0%,
                            #ff9a00 10%,
                            #d0de21 20%,
                            #4fdc4a 30%,
                            #3fdad8 40%,
                            #2fc9e2 50%,
                            #1c7fee 60%,
                            #5f15f2 70%,
                            #ba0cf8 80%,
                            #fb07d9 90%,
                            #ff0000 100%
                        );
                    "
                ></div>
                <p
                    style="
                        margin: 20px auto;
                        font-size: 16px;
                        font-weight: 500;
                        font-family: sans-serif;
                        color: #eef2ff;
                        text-align: center;
                        line-height: 1.5;
                        letter-spacing: 0.6px;
                    "
                >
                    All kinds of event communication and official announcements
                    will be done on the Discord server. Please use the
                    respective project channels during the Community Bonding
                    Phase to engage with your mentors and learn more about the
                    project. Kindly adhere to the event rules and regulations
                    which can be found here:
                    <a
                        href="https://jwoc.tech/docs/student-manual"
                        style="
                            font-size: 16px;
                            font-weight: 600;
                            color: #ff2861;
                            text-decoration: none;
                        "
                    >
                        Mentees' Manual
                    </a>
                </p>
                <p
                    style="
                        margin: 20px auto;
                        font-size: 16px;
                        font-weight: 500;
                        font-family: sans-serif;
                        color: #eef2ff;
                        text-align: center;
                        line-height: 1.5;
                        letter-spacing: 0.6px;
                    "
                >
                    For any further queries, please feel free to reach out to us
                    at
                    <a
                        href="mailto:admin@jwoc.tech"
                        style="
                            font-size: 16px;
                            font-weight: 600;
                            color: #ff2861;
                            text-decoration: none;
                        "
                    >
                        admin@jwoc.tech
                    </a>
                </p>
                <div
                    style="
                        height: 4px;
                        width: 100%;
                        border-radius: 4px;
                        background: linear-gradient(
                            90deg,
                            #ff0000 0%,
                            #ff9a00 10%,
                            #d0de21 20%,
                            #4fdc4a 30%,
                            #3fdad8 40%,
                            #2fc9e2 50%,
                            #1c7fee 60%,
                            #5f15f2 70%,
                            #ba0cf8 80%,
                            #fb07d9 90%,
                            #ff0000 100%
                        );
                    "
                ></div>
                <p
                    style="
                        margin: 20px auto;
                        font-size: 16px;
                        font-weight: 600;
                        font-family: monospace;
                        color: #b1c7d6;
                        text-align: center;
                        line-height: 1.5;
                        letter-spacing: 0.4px;
                    "
                >
                    Thanking You & All the Best! <br />
                    Team JWOC
                    <a
                        href="https://jwoc.tech/"
                        style="
                            display: block;
                            font-style: italic;
                            font-family: sans-serif;
                            color: #c9f658;
                            text-decoration: none;
                            letter-spacing: 0.6px;
                        "
                    >
                        www.jwoc.tech
                    </a>
                </p>
            </div>
        </div>
    `;
};

module.exports = { getMenteeEmail };
