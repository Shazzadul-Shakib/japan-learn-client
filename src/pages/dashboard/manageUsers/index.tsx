import React from "react";
import { useGetAllUserQuery } from "@/redux/api/authApi";
import { User } from "@/types/userTypes";

const ManageUsers: React.FC = () => {
  const { data: users, isLoading } = useGetAllUserQuery({});

  if (isLoading)
    return <div className="p-6 text-center text-primary">Loading...</div>;

  const handleRoleChange = (userId: string, newRole: string) => {
    console.log(`Changing role of user ${userId} to ${newRole}`);
  };

  return (
    <div className="min-h-screen w-full bg-background p-6 text-white">
      <div className="overflow-x-auto rounded-lg bg-primary p-4 shadow-md">
        <table className="min-w-full border-collapse border border-background bg-background shadow-sm">
          <thead className="bg-accent text-white">
            <tr>
              <th className="border border-primary px-4 py-3 text-left text-sm font-medium">
                Username
              </th>
              <th className="hidden border border-primary px-4 py-3 text-left text-sm font-medium sm:table-cell">
                Email
              </th>
              <th className="hidden border border-primary px-4 py-3 text-center text-sm font-medium sm:table-cell">
                Role
              </th>
              <th className="border border-primary px-4 py-3 text-center text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user: User, index: number) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "bg-primary" : "bg-background"
                } hover:bg-accent/10`}
              >
                <td className="border border-primary px-4 py-3 text-sm text-white">
                  {user.userName}
                </td>
                <td className="hidden border border-primary px-4 py-3 text-sm text-white sm:table-cell">
                  {user.email}
                </td>
                <td className="hidden border border-primary px-4 py-3 text-center text-sm font-medium text-white sm:table-cell">
                  {user.role}
                </td>
                <td className="border border-primary px-4 py-3 text-center">
                  <button
                    onClick={() =>
                      handleRoleChange(
                        user._id,
                        user.role === "user" ? "admin" : "user",
                      )
                    }
                    className={`rounded px-3 py-2 text-xs font-semibold text-white shadow-md transition-colors ${
                      user.role === "user"
                        ? "bg-success hover:bg-success/90"
                        : "bg-destructive hover:bg-destructive/90"
                    }`}
                  >
                    {user.role === "user"
                      ? "Promote to Admin"
                      : "Demote to User"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
