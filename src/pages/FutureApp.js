import './FutureApp.scss'

const FutureApp = () => {
    return ( 
        <div className='FutureAppBody'>

            <div className='FutureAppTitle'>
                <h3>What is the future of this app?</h3>
                <h2>Marvel Fantasy Battle</h2>
                
            </div>
            <div className='FutureAppContent'>
                <div className='PageDescription'>
                    <h4>Marvel Fantasy Battle will be an exciting web application that allows you to create your dream team and see how they fare against another worthy team.</h4>
                    <h5>Building the Team</h5>
                    <p>In this application you and your opponent will select your characters from a list, alternating turns. Each selectable character from the list will have a set amount of draft points which they are worth according to their power, and both you and your opponent will have a set amount of draft points which you must not exceed. For example, you may start off with 15 draft points to spend. Some characters will be worth 2 points while others may range up to 5. You may wonder why not just select 3 strong characters who are worth 5 points each. While it would be within the rules to do so, some characters can amplify the powers of members of their team and/or buff the powers of the characters on the opposing team. Keeping this in mind, finding a team that compliments each other may be more beneficial than just strong individual characters. </p>
                    <h5>How the game is played</h5>
                    <p>The goal of the game is for you to acquire more points than your opponent within an agreed upon set of rounds. To begin, once all members of your team have been selected, the scoring algorithm will give your team an effective team battle score(ETBS) based on different factors. Note that this takes into account any amps or buffs received from other team members or battle location. Please see the "what determines your ETBS" section for details. The ETBS score will determine a number of dice you will be granted to use for gameplay. The algorithm will also do the same for your opponent so that you both have the appropriate number of dice based on your respective team's ETBS. You will then virtually roll the dice, by the click of a button, against your opponent to determine who wins that round. The winner will acquire a point. The game will then advance to the second round and randomly change the location. Because of the location change, even though the teams remain the same, your ETBS may change because of any new amps of buffs received from the environment. You repeat the round procedure of rolling and the new round winner will gain a point. You will play as many rounds as was agreed upon, continuing to acquire points. In the end you will tally all the points to determine which team comes out victorious. </p>
                    <h5>Scoring</h5>
                    <p>The game is played by rolling dice, and you win rounds by scoring higher on a roll than your opponent. This means that the more dice you have, the higher your chances are of winning each round to acquire a point. While individual character scores are important, it is your ETBS that will ultimately determine the number of dice you have.</p>
                    <h5>What determines your effective team battle score(ETBS)?</h5>
                    <p>At this current state of developement there are three layers. The first layer to your ETBS will be to get a character's individual battle score (IBS). There will be many factors to determine a character's IBS including strength, speed, close range combat, leadership, flight, projectile ability, etc. Each factor will be weighted differently for priority in battle. The second layer will take the character's IBS and depending on who's on their team and who's on the opponent's team, will recalculate their IBS. For example, if Wolverine's IBS is 800, his score may drop to 200 or lower if Magneto or another metal manipulator is on the opposite team. Note that certain characters have leadership experience and so their very presence on the team could amplify everyone's IBS. An example of these characters may include Professor X, Magneto, Cyclops, Captain America, Reed Richards, etc. The third layer to your ETBS evaluates your current round's battle location. Some characters may do better in certain environments than others. For example, a team that has storm will have a massive advantage in an area surrounded by water or anywhere where she can manipulate the weather. Brawler's and those with stats high in close-range-combat like Wolverine or Black Widow will naturally do better in smaller enclosed areas than those with projectile ability. The amount of advantage or disadvantage will depend on the location. These three layers will combine to give your team its ETBS.</p>
                    <h5>Why use dice?</h5>
                    <p>The Dice are important for two reasons. One, because the game wouldn't be as fun if all you did was just pick the team and let the algorithm give you a score. Anyone can compare two numbers and note which one is higher. The second reason is because even in a real battle there are variables and unforeseen circumstances that allows a slightly weaker team to overcome a stronger team (within reason). Having dice represents those variables. A stronger team does have a better chance of winning and so they have more dice than a weaker team. However, seven dice can still roll as low as 7(7x1) while two dice can roll as high as 12(2x6). No matter how small, there's always a chance!</p>
                    <h6>This is the essence of Marvel Fantasy Battle. It is currently in its early stages of development so look out for it coming soon!</h6>
                </div>
            </div>
        </div>
     );
}
 
export default FutureApp;