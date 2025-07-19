import Link from "next/link"

const Contact = () => {

    return (
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm
                <Link 
                  className="text-blue-500 hover:underline ml-1" 
                  href="https://wa.me/+201020187993/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  with a direct question on whatsapp
                </Link>
                 and I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </div>
        </section>
    )
}

export default Contact