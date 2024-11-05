import { ShortenTextPipe } from "./shorten-text.pipe";


fdescribe('ShortenPipe',()=>{
  let pipe: ShortenTextPipe;

  beforeEach(()=>{
    pipe = new ShortenTextPipe();

  })
  it('Shorten pipe should return correct answer',  () => {
    const text = "user1@example.com_user1@example.com_user1@example.com";
    const result = pipe.transform(text);
    expect(result).toEqual("user1@example.com_user1@example.com_user1@example. ..."); 
  });
})

