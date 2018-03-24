//React
import React, { Component } from 'react';
//Utils
import MediaQuery from '../../Utils/MediaQuery';
//Components
import SimplePage from '../../Components/SimplePage/SimplePage';
import MainDisplay from '../../Components/MainDisplay/MainDisplay';
import DisplayBox from '../../Components/DisplayBox/DisplayBox';
//Style
import './Style/CSS/App.css';
import cat1 from './Style/Images/cat1.jpg';
import cat2 from './Style/Images/cat2.jpg';
import cat3 from './Style/Images/cat3.jpg';
import cat4 from './Style/Images/cat4.jpg';
import cat5 from './Style/Images/cat5.jpg';
import cat6 from './Style/Images/cat6.jpg';
import cat7 from './Style/Images/cat7.jpg';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
          id:1,
          title: "Best Friends Fur-Ever",
          images: [
            {
              src: cat1,
              alt:""
            },
            {
              src: cat4,
              alt:""
            }
          ],
          description: "Toy mouse squeak roll over. Hiding behind the couch until lured out by a feathery toy always ensure to lay down in such a manner that tail can lightly brush human's nose . Eat all the power cords i'm going to lap some water out of my master's cup meow, so spread kitty litter all over house. Cat is love, cat is life has closed eyes but still sees you. Peer out window, chatter at birds, lure them to mouth pose purrfectly to show my beauty or fall asleep on the washing machine for dont wait for the storm to pass, dance in the rain but purr for leave fur on owners clothes. Lounge in doorway. Hack swat at dog, ignore the human until she needs to get up, then climb on her lap and sprawl paw at your fat belly, and if it smells like fish eat as much as you wish or attack the dog then pretend like nothing happened. Stares at human while pushing stuff off a table spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce so lick the other cats for purr for no reason but always hungry. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked chase ball of string but freak human out make funny noise mow mow mow mow mow mow success now attack human. Toy mouse squeak roll over. Hiding behind the couch until lured out by a feathery toy always ensure to lay down in such a manner that tail can lightly brush human's nose . Eat all the power cords i'm going to lap some water out of my master's cup meow, so spread kitty litter all over house. Cat is love, cat is life has closed eyes but still sees you. Peer out window, chatter at birds, lure them to mouth pose purrfectly to show my beauty or fall asleep on the washing machine for dont wait for the storm to pass, dance in the rain but purr for leave fur on owners clothes. Lounge in doorway."
        },
        {
          id:2,
          title: "Cat-Nap Time",
          images: [
            {
              src: cat2,
              alt:""
            },
            {
              src: cat7,
              alt:""
            }
          ],
          description: "Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard wake up human for food at 4am and i love cuddles and instantly break out into full speed gallop across the house for no reason pounce on unsuspecting person thinking longingly about tuna brine hiss and stare at nothing then run suddenly away. Sit on human meowing non stop for food purrrrrr for please stop looking at your phone and pet me. You are a captive audience while sitting on the toilet, pet me love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) chase dog then run away yet cat snacks cat fur is the new black . Meow all night hate dog. Unwrap toilet paper. Stares at human while pushing stuff off a table stare at guinea pigs. Chase red laser dot sit in box. Hunt by meowing loudly at 5am next to human slave food dispenser wack the mini furry mouse so lick plastic bags. Chew on cable while happily ignoring when being called and chase laser, so purr while eating curl up and sleep on the freshly laundered towels leave hair everywhere. Scratch find empty spot in cupboard and sleep all day cat is love, cat is life. Ask to go outside and ask to come inside and ask to go outside and ask to come inside poop in litter box, scratch the walls so cats secretly make all the worlds muffins chirp at birds yet have secret plans meoooow. Meow you have cat to be kitten me right meow or ignore the squirrels, you'll never catch them anyway toy mouse squeak roll over. Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard wake up human for food at 4am and i love cuddles and instantly break out into full speed gallop across the house for no reason pounce on unsuspecting person thinking longingly about tuna brine hiss and stare at nothing then run suddenly away. Sit on human meowing non stop for food purrrrrr for please stop looking at your phone and pet me. You are a captive audience while sitting on the toilet, pet me love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) chase dog then run away yet cat snacks cat fur is the new black . Meow all night hate dog. Unwrap toilet paper. Stares at human while pushing stuff off a table stare at guinea pigs. Chase red laser dot sit in box. Hunt by meowing loudly at 5am next to human slave food dispenser wack the mini furry mouse so lick plastic bags. Chew on cable while happily ignoring when being called and chase laser, so purr while eating curl up and sleep on the freshly laundered towels leave hair everywhere. Scratch find empty spot in cupboard and sleep all day cat is love, cat is life. Ask to go outside and ask to come inside and ask to go outside and ask to come inside poop in litter box, scratch the walls so cats secretly make all the worlds muffins chirp at birds yet have secret plans meoooow. Meow you have cat to be kitten me right meow or ignore the squirrels, you'll never catch them anyway toy mouse squeak roll over. "
        },
        {
          id:3,
          title: "Cat-Stang Photo Shoot",
          images: [
            {
              src: cat5,
              alt:""
            },
            {
              src: cat6,
              alt:""
            },
            {
              src: cat3,
              alt:""
            }
          ],
          description: "Kick up litter ask to go outside and ask to come inside and ask to go outside and ask to come inside and sit on the laptop or give me attention or face the wrath of my claws. Run outside as soon as door open chew the plant. Demand to be let outside at once, and expect owner to wait for me as i think about it dead stare with ears cocked, ooh, are those your $250 dollar sandals? lemme use that as my litter box sweet beast, and give me attention or face the wrath of my claws. Stares at human while pushing stuff off a table. Eat owner's food hunt anything that moves, but mrow bleghbleghvomit my furball really tie the room together so mrow or lounge in doorway. Rub face on everything jump off balcony, onto stranger's head and eat plants, meow, and throw up because i ate plants. Hopped up on catnip dont wait for the storm to pass, dance in the rain. Mesmerizing birds. Meowwww. Eat half my food and ask for more head nudges spill litter box, scratch at owner, destroy all furniture, especially couch jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Cat ass trophy playing with balls of wool or paw at beetle and eat it before it gets away stare at ceiling light for soft kitty warm kitty little ball of furr yet twitch tail in permanent irritation or dream about hunting birds. Who's the baby human give me attention meow. Pushes butt to face please stop looking at your phone and pet me for pooping rainbow while flying in a toasted bread costume in space. Drool the door is opening! how exciting oh, it's you, meh and purr for no reason and meow in empty rooms stare at wall turn and meow stare at wall some more meow again continue staring for pose purrfectly to show my beauty the door is opening! how exciting oh, it's you, meh. Ears back wide eyed climb leg, for cat mojo but sit in box or lick plastic bags. Fooled again thinking the dog likes me cat is love, cat is life go into a room to decide you didn't want to be in there anyway for then cats take over the world, for plan steps for world domination. Spend all night ensuring people don't sleep sleep all day a nice warm laptop for me to sit on yet kick up litter loved it, hated it, loved it, hated it so ears back wide eyed and more napping, more napping all the napping is exhausting so sit by the fire. Chase imaginary bugs hide head under blanket so no one can see, yowling nonstop the whole night adventure always see owner, run in terror attack feet, yet cough hairball on conveniently placed pants. "
        }
      ],
      title: "Simba Cat"
    }
    this.reRoute = this.reRoute.bind(this);
    this.isMobile = MediaQuery.checkIfMobile();
  }

  reRoute(link){
    this.props.history.push(link);
  }

  render() {
    return (
      <div className="App">
        <SimplePage
          reRoute={this.reRoute}
        >
          <MainDisplay
            title={this.state.title}
          >
          {this.state.items.map((item) =>
            <DisplayBox
              key={item.id}
              title={item.title}
              images={item.images}
              description={item.description}
              isMobile={this.isMobile}
            />
          )}
          </MainDisplay>
        </SimplePage>
      </div>
    );
  }
}

export default App;
