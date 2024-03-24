import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Form() {
  return (
    <Tabs defaultValue="account" className="w-[290px] sm:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Akun</TabsTrigger>
        <TabsTrigger value="password">Sandi</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Akun</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you{"'"}re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" defaultValue="" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Simpan Perubahan</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Sandi</CardTitle>
            <CardDescription>
              Change your password here. After saving, you{"'"}ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Sandi Lama</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Sandi Baru</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Simpan Sandi</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
