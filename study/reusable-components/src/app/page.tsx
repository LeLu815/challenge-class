import Button from "./components/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-4">
      <Button size={"sm"} intent={"primary"}>
        Primary
      </Button>
      <Button size={"sm"} intent={"secondary"}>
        Secondary
      </Button>
      <Button size={"sm"} intent={"danger"}>
        Danger
      </Button>

      <Button size={"md"} intent={"primary"}>
        Primary
      </Button>
      <Button size={"md"} intent={"secondary"}>
        Secondary
      </Button>
      <Button size={"md"} intent={"danger"}>
        Danger
      </Button>

      <Button size={"lg"} intent={"primary"}>
        Primary
      </Button>
      <Button size={"lg"} intent={"secondary"}>
        Secondary
      </Button>
      <Button size={"lg"} intent={"danger"}>
        Danger
      </Button>

      <hr />

      <Button variant={"outline"} size={"lg"} intent={"primary"}>
        Primary
      </Button>
      <Button size={"lg"} intent={"secondary"}>
        Secondary
      </Button>
      <Button size={"lg"} intent={"danger"}>
        Danger
      </Button>

      {/* <Chip intent="primary" label="Primary" />
      <Chip intent="secondary" label="Secondary" />
      <Chip intent="danger" label="Danger" />
      <Chip intent="info" label="Info" />
      <Chip label="Default" /> */}
    </div>
  );
}
