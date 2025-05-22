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
import { Book, editBook } from "../api/book";

function EditUserForm(book: Book) {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setLoading(true);
          setTimeout(() => {
            editBook(data as Book, book.isbn)
              .then((response) => {
                if (response?.status === 200) {
                  toast.success(`${book.title} has been edited.`);
                } else {
                  toast.error("Failed to update book");
                }
              })
              .catch((error) => {
                console.error("Error updating book:", error);
                toast.error("An error occurred while updating the book.");
              })
              .finally(() => {
                setLoading(false);
              });
          }, 1000);
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={() => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  defaultValue={book.title}
                  {...form.register("title", { required: true })}
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
                  defaultValue={book.newPrice}
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
                  defaultValue={book.usedPrice}
                  {...form.register("usedPrice")}
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
                  defaultValue={book.costPrice}
                  {...form.register("costPrice")}
                />
              </FormControl>
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
