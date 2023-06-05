export default function () {

    async function timeout(){
      return new Promise((resolve)=>{
      const timedelaytoflexmyanimation = setTimeout(()=>{resolve("done")},4000);
      })
    }

    async function wait(){
      const val = await timeout();
    }

    wait();

    return (
      <div className=" flex h-screen items-center justify-center">
        <div className="mb-16 text-3xl text-blue-700">
          Connecting &nbsp;
          <span className="animation-delay-100 inline-block animate-bounce text-4xl">
            .
          </span>
          <span className="animation-delay-200 inline-block animate-bounce text-4xl">
            .
          </span>
          <span className="animation-delay-300 inline-block animate-bounce text-4xl">
            .
          </span>
        </div>
      </div>
    );
  }  