import React from 'react';

const MuscleGroupSelector = () => {
  return (
    <main>
      <div className="muscle-groups">
<h1>Muscle Group Selector</h1>
<h2>Arms</h2>
<input type="checkbox" className="biceps muscles-helper" id="biceps" />
<label htmlFor="biceps">Biceps</label>
<input type="checkbox" className="deltoids muscles-helper" id="deltoids" />
<label htmlFor="deltoids">Deltoids</label>
<input type="checkbox" className="forearms muscles-helper" id="forearms" />
<label htmlFor="forearms">Forearms</label>
<input type="checkbox" className="triceps muscles-helper" id="triceps" />
<label htmlFor="triceps">Triceps</label>
<h2>Back</h2>
<input type="checkbox" className="trapezius muscles-helper" id="trapezius" />
<label htmlFor="trapezius">Trapezius</label>
<input type="checkbox" className="lats muscles-helper" id="lats" />
<label htmlFor="lats">Lats</label>
<h2>Core</h2>
<input type="checkbox" className="abs muscles-helper" id="abs" />
<label htmlFor="abs">Abs</label>
<input type="checkbox" className="obliques muscles-helper" id="obliques" />
<label htmlFor="obliques">Obliques</label>
<input type="checkbox" className="pectorals muscles-helper" id="pectorals" />
<label htmlFor="pectorals">Pectorals</label>
<h2>Legs</h2>
<input type="checkbox" className="adductors muscles-helper" id="adductors" />
<label htmlFor="adductors">Adductors</label>
<input type="checkbox" className="calves muscles-helper" id="calves" />
<label htmlFor="calves">Calves</label>
<input type="checkbox" className="hamstrings muscles-helper" id="hamstrings" />
<label htmlFor="hamstrings">Hamstrings</label>
<input type="checkbox" className="glutes muscles-helper" id="glutes" />
<label htmlFor="glutes">Glutes</label>
<input type="checkbox" className="quads muscles-helper" id="quads" />
<label htmlFor="quads">Quads</label>
</div>
    </main>
)}

function App() {
  return (
    <div>
      <h1>My Fitness App</h1>
      <MuscleGroupSelector />
     
    </div>
  );
}
export default App;

