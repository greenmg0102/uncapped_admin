import { useState } from 'react';
import clsx from 'clsx'

const RoleItem = ({ item, activeRole, setActiveRole, roleDelete, majorRoleUpdate }: any) => {

    const [editableRole, setEditableRole] = useState("")

    const BuffermajorRoleUpdate = (majorRole: any, editableRole: any) => {
        setEditableRole("")
        majorRoleUpdate(item, editableRole)
    }

    return (
        <div
            className={clsx("flex justify-between items-center mb-4 hover:text-gray-200 transition-all cursor-pointer", activeRole.roleName === item.roleName ? "text-gray-300" : "text-gray-500")}
            onClick={() => setActiveRole(item)}
        >
            {editableRole === "" ?
                <p className="text-[20px]">{item.roleName}</p>
                :
                <input
                    type="text"
                    placeholder="Some Text..."
                    className="form-input"
                    value={editableRole}
                    onChange={(e: any) => setEditableRole(e.target.value)}
                />
            }
            <div className="flex justify-start items-center">
                {editableRole === "" ?
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="edit"
                        width="1.5em"
                        height="1.5em"
                        fill="currentColor"
                        className="ml-4"
                        aria-hidden="true"
                        onClick={() => setEditableRole(item.roleName)}
                    >
                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                    :
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="check"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="ml-4"
                        aria-hidden="true"
                        onClick={() => BuffermajorRoleUpdate(item, editableRole)}
                    >
                        <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                }


                <svg
                    fillRule="evenodd"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="close-circle"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-4"
                    onClick={() => roleDelete(item._id)}
                >
                    <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"></path>
                </svg>
            </div>
        </div>
    );
};

export default RoleItem;