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
import { addUser, User } from "../api/user";

interface AddUserFormData {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: string;
  allowsMarketing?: boolean;
  isBuyer: boolean;
  isSeller: boolean;
}

function AddDialogForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<AddUserFormData>();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setLoading(true);
          setTimeout(() => {
            const { isSeller, isBuyer, ...userData } = data;
            const user: User = {
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              cellphone: userData.cellphone,
              allowsMarketing: userData.allowsMarketing || false,
              type: -1,
            };

            if (isSeller && isBuyer) {
              user.type = 2;
            } else if (isBuyer) {
              user.type = 1;
            } else if (isSeller) {
              user.type = 0;
            }

            addUser(user as User)
              .then((response) => {
                if (response?.status === 200) {
                  toast.success(
                    `${data.firstName} ${data.lastName} has been added.`,
                  );
                } else {
                  toast.error("Failed to add user.");
                }
              })
              .catch((error) => {
                console.error("Error adding user:", error);
                toast.error("An error occurred while adding the user.");
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
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...form.register("firstName", { required: true })}
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
                  placeholder="Doe"
                  {...form.register("lastName", { required: true })}
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
                <Input
                  placeholder="john@example.com"
                  {...form.register("email", { required: true })}
                />
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
                  placeholder="+27 12 345 6789"
                  {...form.register("cellphone", { required: true })}
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
                <input type="checkbox" {...form.register("allowsMarketing")} />
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
                <input type="checkbox" {...form.register("isBuyer")} />
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
                <input type="checkbox" {...form.register("isSeller")} />
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

export default AddDialogForm;
