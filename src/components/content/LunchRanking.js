import ParagraphSection from "./ParagraphSection";

function LunchRanking() {
  return (
    <div class="flex flex-col justify-center items-center">
      <ParagraphSection
        paragraph={
          "Throughout my time at the University of Oxford, I have been visiting various different colleges for lunch. " +
          "This page serves as a little ranking of my personal experience having lunch at each college. " +
          "Below is a (lighthearted and friendly) Top 5 ranking, as well as a complete list of all colleges I have visited, in order." +
          "I should note I have not had a bad lunch experience at any college, but there must be some order imposed."
        }
        image="UniOxfordLogo.jpg"
        position="left"
      />

      <div className="grid grid-cols-2 gap-x-4 justify-items-center items-start">
        <div className="bg-crimson text-white p-4 rounded-lg shadow-md flex flex-col w-full">
          <h4 className="mb-4 text-center font-bold self-center">
            Top 5 (with number of times visited):
          </h4>
          <div className="flex-grow flex flex-col gap-4">
            <div className="flex-1">
              <ol className="list-decimal pl-5">
                <b><li>Hertford (3)</li></b>
                <b><li>Kellogg (5)</li></b>
                <b><li>Lady Margaret Hall (1)</li></b>
                <li>St. Hilda's (1)</li>
                <li>Linacre (1)</li>
              </ol>
            </div>
            <div className="flex-1 border-t border-white/20 pt-4">
              Colleges not listed above:
              <ul className="list-disc pl-5">
                <li>Exeter (1)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-crimson text-white p-4 rounded-lg shadow-md flex flex-col w-full">
          <h4 className="mb-4 text-center font-bold self-center">
            Order visited:
          </h4>
          <div className="flex-grow flex items-center self-center">
            <ul className="list-decimal pl-5">
              <li>Exeter</li>
              <li>Hertford</li>
              <li>Kellogg</li>
              <li>Linacre</li>
              <li>Hertford</li>
              <li>Kellogg</li>
              <li>Kellogg</li>
              <li>Kellogg</li>
              <li>Lady Margaret Hall</li>
              <li>Kellogg</li>
              <li>Hertford</li>
              <li>St. Hilda's</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LunchRanking;
