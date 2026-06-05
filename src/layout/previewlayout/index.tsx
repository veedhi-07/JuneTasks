// import PreviewForm from "../../components/previewform";
// export default function PreviewLayout() {
//   return (
//     <>
//       <div className=" w-[calc(100%-2px)]">
//         <div className="flex flex-col items-center border border-4 h-screen w-full ">
//           <div className="flex flex-col items-center bg-blue-200 h-screen mt-5 rounded-2xl w-2xl">
//             <div>
//               <h1 className="items-center font-extrabold font-sans mt-5">
//                 <strong>FORM PREVIEW</strong>
//               </h1>
//               <div className="border border-4 rounded-2xl h-screen w-2xs">
//                 <PreviewForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import PreviewForm from "../../components/previewform";

export default function PreviewLayout() {
  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[700px]">
          <h1 className="text-3xl font-bold text-center mb-8">Form Preview</h1>

          <div className="space-y-6">
            <PreviewForm />
          </div>
        </div>
      </div>
    </div>
  );
}
