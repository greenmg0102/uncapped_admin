import { useState, useEffect } from "react";
import RoleItem from "./RoleAdminComponent/RoleItem";
import { useDispatch } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import { adminPageList } from '../../../../utils/reference/admin'
import { setPageTitle } from '../../../../store/themeConfigSlice';
import { roleRegist, roleGet, roleUpdate, roleDeleting } from '../../../../utils/functions/admin/UserManaging/RoleMangingGet'
import clsx from 'clsx'

const RoleAdmin = () => {

    const dispatch = useDispatch();

    const [roleValue, setRoleValue] = useState("")
    const [roleList, setRoleList] = useState<any>([])
    const [activeRole, setActiveRole] = useState<any>({})
    const [activedRoleList, setActivedRoleList] = useState<any>([])
    const [treeview1, setTreeview1] = useState<string[]>(['System', 'Business Analytics']);

    useEffect(() => {
        dispatch(setPageTitle('Role Manager'));
    });

    useEffect(() => {
        async function fetchData() {
            let result = await roleGet().then()
            setRoleList(result)
        }
        fetchData()
    }, [])

    const toggleTreeview1 = (name: any) => {
        if (treeview1.includes(name)) {
            setTreeview1((value) => value.filter((d) => d !== name));
        } else {
            setTreeview1([...treeview1, name]);
        }
    };

    const regist = async () => {

        if (roleValue !== "") {
            const data = {
                roleName: roleValue,
                admittingPageList: []
            }
            const result = await roleRegist(data)
            setRoleList(result)
            setRoleValue("")
        }
    }

    const roleDelete = async (roleID: any) => {
        const result = await roleDeleting(roleID)
        setRoleList(result)
    }

    const bufferActiveRole = (role: any) => {
        setActiveRole(role)
        setActivedRoleList(role.admittingPageList)
    }

    const changeAvailableRole = async (availableRole: any) => {
        if (activeRole._id) {
            const data = {
                mainRole: activeRole,
                updatingRole: availableRole,
            };
            const response = await roleUpdate(data);
            setRoleList(response)
            const real = await response.filter((item: any) => item._id === activeRole._id)[0];
            setActivedRoleList(real.admittingPageList)
        }
    };

    const majorRoleUpdate = async (majorRole: any, editableRole: any) => {
        if (majorRole._id) {
            const data = {
                mainRole: activeRole,
                updatingMajorRole: editableRole,
            };
            const response = await roleUpdate(data);
            setRoleList(response)
        }

    }


    return (
        <div>
            <h2 className="text-xl mb-4">Role Manager</h2>
            <div className="flex justify-between items-start flex-wrap">
                <div className="w-full lg:w-1/2 pr-2 mb-2">
                    <div className="rounded-[12px] bg-gray-900 p-4">
                        <div className="mb-5">
                            <div className="flex">
                                <input
                                    id="addonsRight"
                                    type="text"
                                    placeholder=""
                                    value={roleValue}
                                    className="form-input ltr:rounded-r-none rtl:rounded-l-none"
                                    onChange={(e: any) => setRoleValue(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary ltr:rounded-l-none rtl:rounded-r-none"
                                    onClick={regist}
                                >
                                    Regist
                                </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            {roleList.map((item: any, index: any) =>
                                <RoleItem
                                    key={index}
                                    item={item}
                                    activeRole={activeRole}
                                    setActiveRole={(role: any) => bufferActiveRole(role)}
                                    roleDelete={(_id: any) => roleDelete(_id)}
                                    majorRoleUpdate={(majorRole: any, editableRole: any) => majorRoleUpdate(majorRole, editableRole)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pr-2 mb-2">
                    <div className="rounded-[12px] bg-gray-900 p-4">
                        <ul className="font-semibold">
                            {adminPageList.map((item: any, index: any) =>
                                <li key={index} className="py-[5px]">
                                    <button type="button" className={`${treeview1.includes(item.title) ? 'active' : ''}`} onClick={() => toggleTreeview1(item.title)}>
                                        <svg
                                            className={`w-5 h-5 text-primary inline relative -top-1  ltr:mr-2 rtl:ml-2 ${treeview1.includes(item.title) ? '!rotate-180' : 'rtl:rotate-180'}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M19 9L12 15L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"
                                        >
                                            <path opacity="0.5" d="M18 10L13 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path
                                                d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                        {item.title}
                                    </button>
                                    <AnimateHeight duration={300} height={treeview1.includes(item.title) ? 'auto' : 0}>
                                        <ul className="ltr:pl-14 rtl:pr-14">
                                            {item.children.map((each: any, order: any) =>
                                                <li
                                                    key={order}
                                                    className={clsx(
                                                        "py-[5px] cursor-pointer hover:text-green-500 transition-all",
                                                        activedRoleList.filter((item: any) => item === each.title).length > 0 ? "text-green-500" : ""
                                                    )}
                                                    onClick={() => changeAvailableRole(each.title)}
                                                >
                                                    <label className="inline-flex">
                                                        {activedRoleList.filter((item: any) => item === each.title).length > 0 ?
                                                            <svg
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="plus-circle"
                                                                width="1.3em"
                                                                height="1.3em"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                            </svg>
                                                            :
                                                            <svg
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="minus-circle" width="1.3em"
                                                                height="1.3em"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                            </svg>
                                                        }
                                                        <span className="mb-0 ml-2 cursor-pointer">{each.title}</span>
                                                    </label>
                                                </li>
                                            )}

                                        </ul>
                                    </AnimateHeight>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleAdmin;
