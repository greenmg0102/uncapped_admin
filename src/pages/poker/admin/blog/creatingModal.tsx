import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { blogRegist, blogRead } from '../../../../utils/functions/admin/blogManaging/BlogManaging'

export default function CreatingModal({ isOpen, setIsOpen, setBlogList }: any) {

    const MySwal = withReactContent(Swal);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [blogInfo, setBlogInfo] = useState({
        type: -1,
        title: "",
        content: "",
        image: ""
    })

    const onChange = (type: any, value: any) => setBlogInfo({ ...blogInfo, [type]: value })

    const create = async () => {
        if (blogInfo.type === -1) {
            fire('Please set a type', "danger")
        } else if (blogInfo.title === "") {
            fire('Please set a title', "danger")
        } else if (blogInfo.content.length < 50) {
            fire('The content must be at least 50 characters.', "danger")
        } else {
            let result = await blogRegist(blogInfo)
            if (result) {
                setIsOpen(false)
                fire('Registration was successful', "success")
                setBlogList(result)
            } else {
                fire('Registration failed', "danger")
            }
        }
    }

    const fire = (message: any, color: any) => {
        MySwal.fire({
            title: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: `color-${color}`,
            },
        });
    }

    useEffect(() => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("image", selectedFile);

            // Make the API request using formData
            fetch("http://localhost:8000/api/v1/admin/blog/image-upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    http://localhost:5173/backend/uploads/assets/blog/
                    setBlogInfo({ ...blogInfo, image: `http://localhost:5173/backend/uploads/assets/blog/${data.fileName}` })
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                });
        } else {
        }
    }, [selectedFile]);

    const onchange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };


    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" open={isOpen} onClose={() => setIsOpen(!isOpen)} className="relative z-50 w-[900px]" >
                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-center justify-center px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel as="div" className="panel my-8 w-full sm:max-w-[1700px] sm:h-[800px] overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="p-4 pt-8 relative">
                                        <h1 className='text-center text-[24px] text-gray-300 mb-[12px] border-b border-primary border-dashed pb-[12px] font-bold pb-24' >
                                            Article Regist
                                        </h1>

                                        <div className='flex justify-end'>
                                            <select className="w-1/5 form-select border-primary text-primary mb-4" onChange={(e: any) => onChange("type", Number(e.target.value))}>
                                                <option value="-1">Please select the type</option>
                                                <option value="0">Blog</option>
                                                <option value="1">News</option>
                                            </select>
                                        </div>

                                        <div className='flex justify-between items-start mb-4'>
                                            <div className="flex w-full">
                                                <div className="w-[150px] bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap">
                                                    With Title
                                                </div>
                                                <input type="text" className="form-textarea ltr:rounded-l-none rtl:rounded-r-none text-[18px]" onChange={(e: any) => onChange("title", e.target.value)} />
                                            </div>
                                        </div>

                                        <div className='flex justify-between items-start mb-4'>
                                            <div className="flex w-full">
                                                <div className="w-[150px] bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap">
                                                    With Content
                                                </div>
                                                <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none text-[16px]" onChange={(e: any) => onChange("content", e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="flex justify-center w-full">
                                            <input type="file" name="file" multiple id="file" className="hidden" accept=".txt" onChange={e => onchange(e)} />
                                            <label htmlFor="file">
                                                <div className="upload__image-wrapper ">
                                                    <div className=" border border-dashed border-blue-900 rounded-[12px] cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 transition-all" >
                                                        {blogInfo.image !== "" ?
                                                            <img src={blogInfo.image} className='rounded-[12px] w-[12em] object-cover h-[7em]' />
                                                            :
                                                            <div className='flex justify-center items-center px-2 py-5 w-[12em] h-[7em]'>
                                                                <svg
                                                                    focusable="false"
                                                                    data-icon="cloud-upload"
                                                                    width="3em"
                                                                    height="3em"
                                                                    fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
                                                                    <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" />
                                                                    <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" />
                                                                </svg>
                                                                <div className='ml-4'>
                                                                    <h3 className='font-bold transition-all'>
                                                                        With Images
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='absolute top-[12px] right-[12px]'>
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="fullscreen-exit" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true" className='hover:text-gray-200 text-primary cursor-pointer' onClick={() => setIsOpen(false)}>
                                                <path d="M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"></path>
                                            </svg>
                                        </div>
                                        <div className='flex justify-end'>
                                            <button
                                                type="button"
                                                className="btn btn-primary rounded-l mt-4"
                                                onClick={create}
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

