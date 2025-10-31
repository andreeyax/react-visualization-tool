
import './allCategories.css'

import { useNavigate } from "react-router-dom";





function AllCategories(){
    

    let categories=[]

    for(let i=0;i<allCategoriesData.length;i++){
        if(categories.includes(allCategoriesData[i].category)==false){
            categories.push(allCategoriesData[i].category)
        }
        
    }

   


    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2>All categories</h2>
                <div className="card-table-wrapper">
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories.map((a) => (
                            <tr key={a}>
                                <td>{a}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                

                
            </div>

        
            
        
            
        </div>
            
            
        
        
        

  );
}



export const allCategoriesData=[
    {id:18932, type:"multiple choice" ,difficulty:"easy" ,category:"General Knowledge", question:"Which chemical element, number 11 in the Periodic table, has the symbol Na?"}, 
    {id: 7981, type:"multiple choice", difficulty:"easy",category:"General Knowledge",question:"What technology is named after a tenth-century ruler of Denmark and Norway?"},
    {id: 7980, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"What company developed the Xbox line of video game consoles?"},
  {id: 7979, type:"multiple choice", difficulty:"easy", category:"Entertainment: Film", question:"Which of these actors have NOT played Spiderman in the movies?"},
  {id: 7978, type:"multiple choice", difficulty:"medium", category:"Sports", question:"Which of these English football clubs is based in Liverpool?"},
  {id: 7976, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"Which of the following nations was NOT a belligerent in World War I?"},
  {id: 7974, type:"multiple choice", difficulty:"easy", category:"Vehicles", question:"How many wheels does a unicycle have?"},
  {id: 7972, type:"multiple choice", difficulty:"hard", category:"Science: Mathematics", question:"Which of these did mathematician Leonhard Euler NOT develop?"},
  {id: 7970, type:"multiple choice", difficulty:"medium", category:"Science: Mathematics", question:"In a normal distribution, 95% of the data lies within how many standard deviations of the mean?"},
  {id: 7969, type:"multiple choice", difficulty:"medium", category:"Science: Mathematics", question:"Which of these probability distributions is NOT discrete?"},
  {id: 7968, type:"multiple choice", difficulty:"medium", category:"History", question:"Where was Portuguese explorer Ferdinand Magellan killed in 1521?"},
  {id: 7967, type:"multiple choice", difficulty:"medium", category:"History", question:"What was the name of the national hero of the Philippines who inspired and lead the Philippine Revolution against colonial Spain?"},
  {id: 7966, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"What is the real name of American rapper Pitbull?"},
  {id: 7965, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"What does the D stand for in D-pad, found on most video game controllers?"},
  {id: 7963, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"Where does \"Gasolina\" rapper Daddy Yankee originate from?"},
  {id: 7962, type:"multiple choice", difficulty:"easy", category:"Geography", question:"Vatican City, the smallest country in the world, is fully enclosed by which country?"},
  {id: 7961, type:"multiple choice", difficulty:"easy", category:"Entertainment: Music", question:"Swedish DJ Tim Bergling, who produced songs such as \"Levels\" and \"Wake Me Up\", is better known under what alias?"},
  {id: 7960, type:"multiple choice", difficulty:"easy", category:"Entertainment: Music", question:"What is the real name of American rapper Eminem, also known as Slim Shady?"},
  {id: 7959, type:"multiple choice", difficulty:"medium", category:"General Knowledge", question:"\"Gum arabic\" is a natural gum consisting of the hardened sap of which tree species?"},
  {id: 7958, type:"multiple choice", difficulty:"easy", category:"Entertainment: Board Games", question:"Which of these board games do NOT utilize standard 6-sided dice?"},
  {id: 7957, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"How many cards are there in a standard deck of playing cards?"},
  {id: 7956, type:"multiple choice", difficulty:"easy", category:"Geography", question:"In which Indian city can the Taj Mahal be found?"},
  {id: 7955, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"In which cardinal direction does the Sun rise from?"},
  {id: 7954, type:"multiple choice", difficulty:"easy", category:"Entertainment: Books", question:"American illustrator and writer Maurice Sendak is most well-known for writing which children's book?"},
  {id: 7953, type:"true/false", difficulty:"easy", category:"Geography", question:"Bosnia and Herzegovina is a country located in the Baltic region in Europe."},
  {id: 7952, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"Which type of cutlery is most suited for eating soup?"},
  {id: 7951, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"The American company \"Campbell's\" is most well known for making what food product?"},
  {id: 7947, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"M.U.G.E.N. is the name for what type of Game Engine?"},
  {id: 7946, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"How many fingers does a single human hand have?"},
  {id: 7943, type:"multiple choice", difficulty:"easy", category:"Science: Mathematics", question:"How many degrees make a full circle?"},
  {id: 7942, type:"true/false", difficulty:"easy", category:"General Knowledge", question:"Water is naturally coloured blue."},
  {id: 7941, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"How many letters are in the English alphabet?"},
  {id: 7940, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"The 2023 Beatles song \"Now and Then\" originated from an unfinished demo recorded by which Beatle?"},
  {id: 7939, type:"multiple choice", difficulty:"easy", category:"Sports", question:"The UEFA Champions League is an annual club football competition featuring clubs from which continent?"},
  {id: 7938, type:"multiple choice", difficulty:"easy", category:"Geography", question:"What is the largest hot desert in the world?"},
  {id: 7937, type:"true/false", difficulty:"medium", category:"General Knowledge", question:"Only a small percentage of the world's population is lactose intolerant."},
  {id: 7936, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"The Quran is the holy book of which Abrahamic religion?"},
  {id: 7935, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"How many planets are there in the Solar System?"},
  {id: 7934, type:"multiple choice", difficulty:"easy", category:"Geography", question:"What is the name of the ocean that Hawaii is located in?"},
  {id: 7933, type:"true/false", difficulty:"easy", category:"General Knowledge", question:"The disease cancer in itself is not contagious."},
  {id: 7932, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"How many moons does the Earth have?"},
  {id: 7931, type:"true/false", difficulty:"easy", category:"General Knowledge", question:"The CEO of tech company Apple following Steve Jobs is named Tim Apple."},
  {id: 7930, type:"true/false", difficulty:"easy", category:"Geography", question:"Africa is a country."},
  {id: 7929, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"Antibiotics are generally taken to combat what?"},
  {id: 7928, type:"true/false", difficulty:"easy", category:"Geography", question:"Washington, D.C. is considered a US state."},
  {id: 7927, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"About what percentage of the Earth's surface is water?"},
  {id: 7925, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"According to the Book of Genesis in the Old Testament, how many days did it take God to create the world?"},
  {id: 7924, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"What country does sushi & karaoke come from?"},
  {id: 7923, type:"multiple choice", difficulty:"medium", category:"Geography", question:"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?"},
  {id: 7922, type:"multiple choice", difficulty:"easy", category:"Entertainment: Cartoon & Animations", question:"Who voiced the Genie in Disney's \"Aladdin\"?"},
  {id: 7849, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"The games Cry of Fear, Natural Selection and Counter-Strike were originally mods for what video game?"},
  {id: 7847, type:"multiple choice", difficulty:"medium", category:"Science: Gadgets", question:"Which company manufactured the iconic TR-808 drum machine?"},
  {id: 7846, type:"multiple choice", difficulty:"easy", category:"Entertainment: Music", question:"Which of these is NOT considered a woodwind instrument?"},
  {id: 7845, type:"multiple choice", difficulty:"medium", category:"Entertainment: Television", question:"Who composed the theme song for The Simpsons?"},
  {id: 7844, type:"true/false", difficulty:"medium", category:"Science & Nature", question:"Enthalpy is a measure of the energy that is not available for work during a thermodynamic process."},
  {id: 7843, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"How many laws of thermodynamics are there?"},
  {id: 7842, type:"multiple choice", difficulty:"hard", category:"Politics", question:"Which US state was the first to allow women to vote in 1869?"},
  {id: 7841, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"What is the largest planet in the Solar System?"},
  {id: 7767, type:"multiple choice", difficulty:"hard", category:"Entertainment: Books", question:"Which classic horror character killed Elizabeth Lavenza?"},
  {id: 7765, type:"multiple choice", difficulty:"medium", category:"Entertainment: Books", question:"In Rudyard Kipling's \"The Jungle Book\", what type of snake was Kaa?"},
  {id: 7761, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"\"The Day the Music Died\" was a tragic plane crash that killed three musicians in which decade?"},
  {id: 7760, type:"multiple choice", difficulty:"medium", category:"General Knowledge", question:"Which of these American singers and songwriters won a Nobel Prize in Literature?"},
  {id: 7758, type:"true/false", difficulty:"hard", category:"Science & Nature", question:"Frederick Banting and John Macleod won a Nobel Prize for their contributions to the scientific fields of quantum mechanics."},
  {id: 7756, type:"true/false", difficulty:"medium", category:"General Knowledge", question:"A pencil's lead is typically made from graphite, not lead"},
  {id: 7755, type:"multiple choice", difficulty:"easy", category:"Science: Computers", question:"On a standard American QWERTY keyboard, what symbol will you enter if you hold the shift key and press 1?"},
  {id: 7754, type:"true/false", difficulty:"medium", category:"General Knowledge", question:"Kraft \"Cheez Whiz\" contains cheese culture, but doesn't actually contain cheese"},
  {id: 7751, type:"multiple choice", difficulty:"medium", category:"Sports", question:"Hockey player Wayne Gretzky was born in what Canadian province?"},
  {id: 7750, type:"multiple choice", difficulty:"medium", category:"General Knowledge", question:"What year was the first Apple iPod introduced?"},
  {id: 7747, type:"true/false", difficulty:"hard", category:"Mythology", question:"Skaði is the Norse Goddess of skiing, mountains, winter and bowhunting."},
  {id: 7745, type:"multiple choice", difficulty:"easy", category:"Entertainment: Board Games", question:"Which of the following is NOT a class in Dungeons and Dragons 5e?"},
  {id: 7742, type:"multiple choice", difficulty:"medium", category:"Entertainment: Video Games", question:"In World of Warcraft lore, how many siblings does Sylvanas Windrunner have?"},
  {id: 7741, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"In World of Warcraft's Mists of Pandaria expansion, What was the level cap?"},
  {id: 7737, type:"true/false", difficulty:"easy", category:"Entertainment: Video Games", question:"In the Mortal Kombat series the \"Deadly Alliance\" consists of Shang Tsung and Quan Chi"},
  {id: 7734, type:"multiple choice", difficulty:"medium", category:"Entertainment: Board Games", question:"About how many Slinkys were sold in their first 60 years (from 1945 to 2005)?"},
  {id: 7732, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"Which of these following weapon or equipment exists in Counter Strike but not in Counter Strike: Source?"},
  {id: 7731, type:"multiple choice", difficulty:"medium", category:"Entertainment: Video Games", question:"In Super Smash Bros. Ultimate, which of the following pair of characters are NOT considered \"Echo Fighters\"?"},
  {id: 7729, type:"multiple choice", difficulty:"medium", category:"Entertainment: Video Games", question:"In Minecraft: Java Edition, which of the following feature/block was added to Survival mode in Beta 1.3?"},
  {id: 7728, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"In Slay the Spire, which of the following is NOT a playable character?"},
  {id: 7725, type:"true/false", difficulty:"easy", category:"Entertainment: Video Games", question:"In Team Fortress 2, the weapon \"Your Eternal Reward\" is a reference to the 1992 film Aladdin."},
  {id: 7722, type:"multiple choice", difficulty:"hard", category:"Politics", question:"Starting from 2000, China banned manufacturing and sales of all video game consoles. On which year was this ban lifted?"},
  {id: 7720, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"What year was Weezer's album \"Pinkerton\" released?"},
  {id: 7709, type:"multiple choice", difficulty:"easy", category:"Entertainment: Video Games", question:"Who is the main protagonist in the 'Ratchet and Clank' game series?"},
  {id: 7706, type:"multiple choice", difficulty:"easy", category:"Science & Nature", question:"What is the common name of the chemical compound \"dihydrogen monoxide\"?"},
  {id: 7580, type:"multiple choice", difficulty:"easy", category:"General Knowledge", question:"In \"Katamari Damacy\", you control a character known as:"},
  {id: 7578, type:"true/false", difficulty:"medium", category:"Entertainment: Video Games", question:"POLYBIUS is a myth arcade cabinet/game"},
  {id: 7577, type:"multiple choice", difficulty:"hard", category:"Entertainment: Video Games", question:"What major event caused the events of Half-Life 1?"},
  {id: 7572, type:"multiple choice", difficulty:"hard", category:"Art", question:"What was the first successful and commercially viable photographic technique?"},
  {id: 7569, type:"multiple choice", difficulty:"easy", category:"Art", question:"What is the world's oldest known piece of fiction?"},
  {id: 7568, type:"multiple choice", difficulty:"medium", category:"Art", question:"What were Marcel Duchamp's readymades?"},
  {id: 7566, type:"multiple choice", difficulty:"hard", category:"Art", question:"What was the major distinction between the English and French Gothic styles of architecture?"},
  {id: 7565, type:"multiple choice", difficulty:"easy", category:"Art", question:"What is a fundamental element of the Gothic style of architecture?"},
  {id: 7563, type:"multiple choice", difficulty:"medium", category:"Entertainment: Video Games", question:"What Sims console game featured the Black Eyed Peas in the game?"},
  {id: 7562, type:"multiple choice", difficulty:"medium", category:"Entertainment: Music", question:"What is Fergie's debut album called?"},
  {id: 7560, type:"multiple choice", difficulty:"hard", category:"Entertainment: Film", question:"What was the first superhero film James Gunn was involved with?"},
  {id: 7557, type:"true/false", difficulty:"easy", category:"General Knowledge", question:"Is a dog a mammal?"},
  {id: 7551, type:"multiple choice", difficulty:"medium", category:"Entertainment: Video Games", question:"In the Half-Life 2 universe, how long did it take for the Combine to take complete control of the earth?"},
  {id: 7549, type:"multiple choice", difficulty:"medium", category:"Entertainment: Television", question:"Pat Cashman, the announcer for Super Smash Brothers: Brawl, also featured prominently in what famous TV show?"},
  {id: 7548, type:"multiple choice", difficulty:"hard", category:"Entertainment: Music", question:"Which artists' version of the song \"The Tide is High\" came first?"},
  {id: 7547, type:"multiple choice", difficulty:"easy", category:"Entertainment: Japanese Anime & Manga", question:"What's the English Dub Name of \"Smile Precure\"?"},
  {id: 7542, type:"multiple choice", difficulty:"easy", category:"Science: Mathematics", question:"What type of angle is greater than 90°?"},
  {id: 7539, type:"multiple choice", difficulty:"medium", category:"Science: Mathematics", question:"What numbers are in the 5th row of Pascal's Triangle?"}
]


export default AllCategories