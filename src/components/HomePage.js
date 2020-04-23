import React from "react";
import Clock from "./Clock";

export default function HomePage() {
  return (
    <section className="page">
      <h1>Welcome to my Landing Page</h1>
      <p>
        This is a bunch of long text that really has no use besides filling up
        space so I'll just copy paste something interesting here :)
      </p>
      <p>
        "The rules of the Hunger Games are simple. In punishment for the
        uprising, each of the twelve districts must provide one girl and one
        boy, called tributes, to participate. The twenty-four tributes will be
        imprisoned in a vast outdoor arena that could hold anything from a
        burning desert to a frozen wasteland. Over a period of several weeks,
        the competitors must fight to the death. The last tribute standing
        wins."
      </p>
      <p>
        "Voldemort himself created his worst enemy, just as tyrants everywhere
        do! Have you any idea how much tyrants fear the people they oppress? All
        of them realize that, one day, amongst their many victims, there is sure
        to be one who rises against them and strikes back!"
      </p>
      <h2>
        Did you know that it's currently <Clock /> ☕?
      </h2>
      <p>
        “The Ministry of Truth, which concerned itself with news, entertainment,
        education and the fine arts. The Ministry of Peace, which concerned
        itself with war. The Ministry of Love, which maintained law and order.
        And the Ministry of Plenty, which was responsible for economic affairs.
        Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.”
      </p>
      <p>
        “Those poems reflected the perplexed struggle for supremacy between the
        two grand elements of our language, which marked the twelfth and
        thirteenth centuries; a struggle intimately associated with the
        political relations between the conquering Normans and the subjugated
        Anglo-Saxons.”
      </p>
    </section>
  );
}
