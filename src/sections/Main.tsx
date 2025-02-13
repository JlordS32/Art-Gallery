import Button from "../components/Button";

const Main = () => {
   return (
      <main>
         <div>
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
            <h3>This is heading 3</h3>
            <h4>This is heading 4</h4>
            <p className="text-base">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
               alias nulla labore corrupti quidem iure dignissimos nemo suscipit
               doloremque laboriosam placeat nostrum ipsum animi nihil culpa
               illum hic ducimus, ad voluptatem distinctio. Nam, eaque obcaecati
               tenetur eveniet quo fugit? Perspiciatis voluptas iste sint,
               soluta voluptate accusamus ratione esse veniam impedit.
            </p>
            <br />
            <div className="flex-center flex-col">
               <Button text="Click me" type="primary" />
               <Button text="Click me" type="secondary" />
               <Button text="Click me" type="secondary" />
               <Button text="Click me" type="secondary" />
            </div>
            <p className="text-sm">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               numquam?
            </p>
         </div>
      </main>
   );
};

export default Main;
