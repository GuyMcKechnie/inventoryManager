import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { editUser, User } from "../api/user";

function EditUserForm(user: User) {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setLoading(true);
          setTimeout(() => {
            editUser(data as User, user.userId)
              .then((response) => {
                if (response?.status === 200) {
                  toast.success(`${user.fullName} has been edited.`);
                } else {
                  toast.error("Failed to update user");
                }
              })
              .catch((error) => {
                console.error("Error updating user:", error);
                toast.error("An error occurred while updating the user.");
              })
              .finally(() => {
                setLoading(false);
              });
          }, 1000);
        })}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={() => (
            <FormItem id="firstName">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  defaultValue={user.firstName}
                  {...form.register("firstName")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={() => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  defaultValue={user.lastName}
                  {...form.register("lastName")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input defaultValue={user.email} {...form.register("email")} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cellphone"
          render={() => (
            <FormItem>
              <FormLabel>Cellphone</FormLabel>
              <FormControl>
                <Input
                  defaultValue={user.cellphone}
                  {...form.register("cellphone")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="allowsMarketing"
          render={() => (
            <FormItem className="flex flex-row gap-2 pt-2">
              <FormControl>
                <input
                  type="checkbox"
                  defaultChecked={user.allowsMarketing}
                  {...form.register("allowsMarketing")}
                />
              </FormControl>
              <FormLabel>Allows Marketing</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isBuyer"
          render={() => (
            <FormItem className="flex flex-row gap-2">
              <FormControl>
                <input
                  type="checkbox"
                  defaultChecked={user.isBuyer}
                  {...form.register("isBuyer")}
                />
              </FormControl>
              <FormLabel>Buyer</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isSeller"
          render={() => (
            <FormItem className="flex flex-row gap-2">
              <FormControl>
                <input
                  type="checkbox"
                  checked={user.isSeller}
                  {...form.register("isSeller")}
                />
              </FormControl>
              <FormLabel>Seller</FormLabel>
            </FormItem>
          )}
        />
        {loading ? (
          <Button type="submit" variant="default" className="mt-2">
            <Loader className="animate-spin" /> Editing
          </Button>
        ) : (
          <Button type="submit" variant="default" className="mt-2">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}

export default EditUserForm;
