import PreviewForm from "../../components/previewform";

export default function PreviewLayout() {
  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 min-h-175">
          <h1 className="text-3xl font-bold text-center mb-8">Form Preview</h1>

          <div className="space-y-6">
            <PreviewForm />
          </div>
        </div>
      </div>
    </div>
  );
}
