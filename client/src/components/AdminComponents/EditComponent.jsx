import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Edit2, Trash2, Save, X } from 'lucide-react';

const EditComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const courseDetails = location.state || {};

    const [form, setForm] = useState({
        name: courseDetails.name || '',
        description: courseDetails.description || '',
        price: courseDetails.price || '',
        duration: courseDetails.duration || '',
        thumbNail: courseDetails.thumbNail || '',
        category: courseDetails.category || ''
    });
    // preview state for thumbnail image (either URL typed or selected file)
    const [previewUrl, setPreviewUrl] = useState(courseDetails.thumbNail || '');
    const [previewFile, setPreviewFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // if user types a thumbnail url, update preview to show it
        if (name === 'thumbNail') {
            // if there was a previously created object URL from a file, revoke it
            if (previewFile && previewUrl && previewUrl.startsWith('blob:')) {
                try { URL.revokeObjectURL(previewUrl); } catch (e) { /* ignore */ }
            }
            setPreviewFile(null);
            setPreviewUrl(value || '');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        // revoke previous object URL if any
        if (previewFile && previewUrl && previewUrl.startsWith('blob:')) {
            try { URL.revokeObjectURL(previewUrl); } catch (e) { }
        }
        const url = URL.createObjectURL(file);
        setPreviewFile(file);
        setPreviewUrl(url);
    };

    const applyPreviewAsThumbnail = () => {
        if (!previewUrl) return alert('No preview available to apply.');
        setForm(prev => ({ ...prev, thumbNail: previewUrl }));
        alert('Preview applied to thumbnail field (demo).');
    };

    // cleanup object URL on unmount
    React.useEffect(() => {
        return () => {
            if (previewFile && previewUrl && previewUrl.startsWith('blob:')) {
                try { URL.revokeObjectURL(previewUrl); } catch (e) { }
            }
        };
    }, [previewFile, previewUrl]);

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Save course', id, form);
        alert('Saved (demo). Check console for data.');
        navigate(-1);
    };

    const handleDelete = () => {
        if (!confirm('Delete this course? This action cannot be undone.')) return;
        console.log('Delete course', id);
        alert('Deleted (demo). Check console for data.');
        navigate(-1);
    };

    if (!location.state) {
        return (
            <div className="p-6">
                <p className="text-lg text-heading">No course data provided to edit.</p>
                <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 rounded" style={{ background: 'var(--color-button)', color: '#fff' }}>
                    Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-navbar rounded-lg shadow-md" style={{ background: 'var(--color-navbar)' }}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-heading font-bold text-heading inline-flex items-center gap-2">
                    <Edit2 size={20} /> Edit Course
                </h2>
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="px-3 py-1 rounded-md flex items-center gap-2" style={{ background: 'transparent', color: 'var(--color-heading)' }}>
                        <X size={16} /> Cancel
                    </button>
                </div>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-heading mb-1">Title</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border" style={{ color: 'var(--color-heading)' }} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-heading mb-1">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} rows={5} className="w-full px-3 py-2 rounded-md border" style={{ color: 'var(--color-heading)' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-heading mb-1">Price</label>
                        <input name="price" value={form.price} onChange={handleChange} className="w-full px-3 py-2 rounded-md border" style={{ color: 'var(--color-heading)' }} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-heading mb-1">Duration</label>
                        <input name="duration" value={form.duration} onChange={handleChange} className="w-full px-3 py-2 rounded-md border" style={{ color: 'var(--color-heading)' }} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-heading mb-1">Category</label>
                        <input name="category" value={form.category} onChange={handleChange} className="w-full px-3 py-2 rounded-md border" style={{ color: 'var(--color-heading)' }} />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-heading mb-1">Thumbnail (file)</label>
                    {/* Visible file input - user asked for file type not URL */}
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="block text-sm text-heading w-full" />

                    {/* show current thumbnail url for reference (readonly) */}
                    {form.thumbNail ? (
                        <div className="mt-2 text-xs text-gray-600 break-all">Current: <span className="text-sm text-heading">{form.thumbNail}</span></div>
                    ) : null}

                    {/* Image preview + controls */}
                    <div className="mt-3 md:flex md:items-start md:gap-4">
                        <div className="w-full md:w-48 h-32 bg-white rounded-md overflow-hidden border" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                            {previewUrl ? (
                                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                <img src={previewUrl} alt="thumbnail preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">No preview</div>
                            )}
                        </div>

                        <div className="flex-1 mt-2 md:mt-0">
                            <div className="mt-2 flex gap-2">
                                <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 px-3 py-2 rounded-md" style={{ background: 'var(--color-button)', color: '#fff' }}>
                                    <Save size={14} /> Update Image
                                </button>
                                
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md" style={{ background: 'var(--color-button)', color: '#fff' }}>
                        <Save size={16} /> Save Changes
                    </button>

                    <button type="button" onClick={handleDelete} className="inline-flex items-center gap-2 px-4 py-2 rounded-md" style={{ background: '#ef4444', color: '#fff' }}>
                        <Trash2 size={16} /> Delete
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditComponent;
