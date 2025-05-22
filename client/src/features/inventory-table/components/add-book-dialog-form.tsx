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
import { addBook, Book } from "../api/book";

function AddDialogForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setLoading(true);
          setTimeout(() => {
            addBook(data as Book)
              .then((response) => {
                console.log(response?.data);
                if (response?.status === 200) {
                  toast.success(`${data.title} has been added.`);
                } else if (response?.status === 409) {
                  toast.error("Book already exists.");
                } else {
                  toast.error("Failed to add book.");
                }
              })
              .catch((error) => {
                console.error("Error adding book:", error);
                toast.error("An error occurred while adding the textbook.");
              })
              .finally(() => setLoading(false));
          }, 1000);
        })}
      >
        <FormField
          control={form.control}
          name="isbn"
          render={() => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="978-3-16-148410-0"
                  {...form.register("isbn", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={() => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Introduction to Algorithms"
                  {...form.register("title", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={() => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5"
                  {...form.register("grade", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPrice"
          render={() => (
            <FormItem>
              <FormLabel>New Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="R560.00"
                  {...form.register("newPrice", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="usedPrice"
          render={() => (
            <FormItem>
              <FormLabel>Used Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="R500.00"
                  {...form.register("usedPrice", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="costPrice"
          render={() => (
            <FormItem>
              <FormLabel>Cost Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="R300.00"
                  {...form.register("costPrice", { required: true })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {loading ? (
          <Button type="submit" variant="default" className="mt-2">
            <Loader className="animate-spin" /> Adding
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
